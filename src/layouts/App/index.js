import React, { Component } from 'react';
import Header from '../../components/Header';
import Chart from '../../components/Chart';
import Summary from '../../components/Summary';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Summary/>
        <Chart/>
      </div>
    );
  }
}

export default App;