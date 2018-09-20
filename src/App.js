import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './PieChart'
import LabeledArc from './LabeledArc'

const data = require('./data.json');

class App extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    // top google searches data
    const selectedData = topGoogleSearches.All;
    let selectedDataArray = [];

    for (let key in selectedData) {
        let individualObject = {};
        individualObject.key = key;
        individualObject.value = selectedData[key];
        selectedDataArray.push(individualObject);
    }

    // setting the state as a sorted array.
    this.setState({
        ...this.state,
        data: selectedDataArray
    })
  }

  render() {
    return (
      <div className="App">
        <WidgetTopsearches 
          data={this.state.data} 
          x={200}
          y={200} 
          outerRadius={100} 
          innerRadius={50}
        />
      </div>
    );
  }
}

export default App;
