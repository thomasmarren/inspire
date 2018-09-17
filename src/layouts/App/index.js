import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from '../../actions';
import Header from '../../components/Header';
import './index.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(test())
  }

  render() {
    return (
      <div>
        <Header/>
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