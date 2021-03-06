import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callDailyApi } from '../../actions';
import { axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import './index.css';
import svg from '../../utils/svg.js';

class Chart extends Component {

  componentDidMount() {
    //on load call api
    this.props.dispatch(callDailyApi( this.props.user ))
  }

  render() {
    // Since both the D3 library & React library attempt to take over DOM manipulation, 
    // changes have to be made with D3 calls to play well with React. 
    // Would look into cleaning up svg creation with more time
    
    return (
      <div className="flex center">
        <svg width={svg.svgWidth} height={svg.svgHeight} viewBox="0 0 960 500" preserveAspectRatio="xMidYMid meet">
          <g transform={`translate(${svg.margin.left}, ${svg.margin.top})`}>
            <g
              className="axis axis--x"
              transform={`translate(0, ${svg.height})`}
              ref={node => select(node).call(axisBottom(svg.x))}
            />
            <text y="450" x="425" textAnchor="end">
                Date
            </text>
            <g className="axis axis--y">
              <g ref={node => select(node).call(axisLeft(svg.y))} />
              <text transform="rotate(-90)" y="-30" x="-150" textAnchor="end">
                Temperature
              </text>
            </g>
            {this.props.daily.map(d => (
              <rect
                className="bar"
                x={svg.x(d.date)}
                y={svg.y(d.temperature)}
                width={svg.x.bandwidth()}
                height={svg.height - svg.y(d.temperature)}
              />
            ))}
          </g>
        </svg>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    daily: state.daily,
    user: state.user
  };
}


export default connect(mapStateToProps)(Chart);