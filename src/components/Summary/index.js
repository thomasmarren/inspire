import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callSummaryApi, changeUser, callDailyApi } from '../../actions';
import './index.css';

class Summary extends Component {
  
  componentDidMount() {
    this.props.dispatch(callSummaryApi(this.props.user))
  }

  onChange(event){
    // Re-call the summary & daily api's to update the interface
    this.props.dispatch(changeUser( event.target.value ))
    this.props.dispatch(callSummaryApi( event.target.value ))
    this.props.dispatch(callDailyApi( event.target.value ))
  }

  render() {
    return (
      <div className="summary center">
        <h3>YOUR STATS</h3>
        <p>{this.props.summary.score_text}</p>
        <p><b>Average Daily Energy Usage: </b>{this.props.summary.average_daily_energy_usage}</p>
        <p><b>Average Daily Temperature: </b>{this.props.summary.average_daily_temp}</p>
        <p><b>Your Score: </b>{this.props.summary.score}</p>
        <select id="user" onChange={this.onChange.bind(this)} value={this.props.user}>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    summary: state.summary,
    user: state.user
  };
}

export default connect(mapStateToProps)(Summary);