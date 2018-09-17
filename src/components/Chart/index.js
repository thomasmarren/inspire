import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApi } from '../../actions';
import './index.css';

class Chart extends Component {
  componentDidMount() {
    this.props.dispatch(getApi())
  }

  render() {
    return (
      <div>
      	<h1>This is the Chart</h1>
				{JSON.stringify(this.props.data)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data.daily_energy_usage,
  };
}

export default connect(mapStateToProps)(Chart);