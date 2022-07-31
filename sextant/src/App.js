import './App.css';
import React from 'react';

class Banner extends React.Component{
  render() {
    return (
      <h1 className="title">{this.props.name}</h1>
    );
  }
}

class Exhibit extends React.Component {
  render() {
    return (
      <div className="exhibit">
        <Banner name={this.props.title}/>
        <div className="datapoint">
          <h6>datapoint</h6>
        </div>
      </div>
      
    );
  };
}

function App() {
  return (
    <div className="App">
      <Banner name="Sextant" className/>
      <Exhibit title="hello"/>
    </div>
  );
}

export default App;
