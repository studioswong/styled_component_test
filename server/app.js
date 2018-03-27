const express = require('express');
var app = express();
//app.use('app.router');

var fs = require('fs')
var content = fs.readFileSync('report.json', 'utf8');
var data = JSON.parse(content)
console.log('logging test data:', data[0]);

const getTypeOneData = async (data) => {
    try {
        const response = await processData(data);
        return response.json();
    } catch (e) {
        console.error(e);
    }
}

const returnDataByDate = (data) => {
    let currentDate = data[0].date;
    let groupedDataByDate = [];
    let dataWithinDate = [];

    for(i = 0; i<data.length; i++) {
        if(data[i].data === currentDate) {
            dataWithinDate.push(data[i]);
        } else {
            // push the previous data into overall array
            groupedDataByDate.push(dataWithinDate);
            // clear dataWithinDate
            dataWithinDate = [];
            // updateCurrentDate
            currentDate = data[i].date;
            dataWithinDate.push(data[i]);
        }
    }
    return groupedDataByDate;
}

const processData = (data) => {
    const groupedData = returnDataByDate(data);
    let started = 0;
    let completed = 0;
    let impressions = 0;
    let dataAll = [];

    for (i=0; i<groupedData.length; i++) {
        started = 0;
        completed = 0;
        impressions = 0;
        for (n=0; n<groupedData[i].length; n++) {
           if (groupedData[i][n].type === 'started') {
            started += 1;
            } else if (groupedData[i][n] === 'completed') {
            completed += 1;
            } else if (groupedData[i][n] === 'impressions') {
            impressions += 1;
            }
        }
        dataAll.push({
            "data": groupedData[i][n].date,
            "started": started,
            "impressions:": impressions,
            "completed": completed
        })
    }
    return dataAll;
}

const testJSON = (req, res) => {
    console.log(data.length);
    res.send(data[0]);
}

// set routes
// app.get('/api', routes.api);
app.get('/api/report', testJSON);
app.get('/api/type1', getTypeOneData);
//app.get('/api/queryByDate/:startDate/:endDate', getEventsByDay)

app.listen(4000, ()=>{
    console.log('server listening on port 4000');
})





