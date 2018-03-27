const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const SELECT_REPORT = 'SELECT * FROM `report`';
const SELECT_INSERTION = 'SELECT * FROM `insertion_order`';

const connection = mysql.createConnection({
    host: 'localhost',
    port:3000,
    user: 'root',
    password: 'root',
    database: 'test_adludio'
})

connection.connect(err => {
    if(err) {
        return err;
    }
});

//console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /reports to see reports')
});

app.get('/reports', (req, res)=>{
    connection.query(SELECT_REPORT, (err, results) =>{
        if(err) {
            console.log('error with query')
            return res.send(err)
        }
        else {
            console.log('successfully queried!')
            return res.json({
                data: results
            })
        }
    })
})

app.get('/insertion_order', (req, res)=>{
    connection.query(SELECT_INSERTION, (err, results) =>{
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})

app.listen(4000, ()=>{
    console.log('server listening on port 4000');
})