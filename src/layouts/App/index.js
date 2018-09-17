import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Chart from '../../components/Chart';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Chart/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(App);