import React, { Component } from 'react';
import logo from './newludio_white.svg';
import './App.css';
import ReportTable from './components/ReportTable';
import ReportData from './data/report2.json';
import CampaignTable from './components/CampaignTable';
import CampaignData from './data/campaign.json';
import InsertionOrderTable from './components/InsertionOrderTable';
import InsertionOrderData from './data/insertion_order.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redefining Mobile Advertising</h1>
        </header>

        <h1 className="App-title">Insertion Order Data</h1>
        <InsertionOrderTable data={InsertionOrderData}/>
        <h1 className="App-title">Campaign Data</h1>
        <CampaignTable data={CampaignData}/>
        <h1 className="App-title">Report Data ( rows 1 - 10 )</h1>
        <ReportTable data={ReportData}/>
      </div>
    );
  }
}

export default App;
