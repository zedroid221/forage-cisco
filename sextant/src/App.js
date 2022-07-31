import './App.css';
import React from 'react';
import Banner from './Banner'
import Exhibit from './Exhibit'
import FetchIp from './FetchIp';

function App() {
  return (
    <div className="App">
      <Banner name="Sextant"/>
      <Exhibit title="V6">
        <FetchIp url="https://api.ipify.org?format=json"/>
      </Exhibit>
      <Exhibit title="V4">
        <FetchIp url='https://api64.ipify.org?format=json' />
      </Exhibit>
    </div>
  );
}

export default App;
