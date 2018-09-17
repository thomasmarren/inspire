import api from './utils/api.js';
import svg from './utils/svg.js';
import { max } from 'd3-array';

export function callDailyApi( user ){
	return dispatch => {
		//Api call to get the users daily energy usage data
		fetch(api[user].daily)
			.then(response => response.json())
			.then((data) => {

				//Format data from api to D3 readable format
		    var array = [];
		    Object.values(data.daily_energy_usage).map((d) => (
		      array.push({
		      	// create new keys to easily reference in D3 graph call
		        temperature: +d[Object.keys(d)[0]],
		        date: Object.keys(d)[0]
		      })
		    ))

		    // This is D3 specific to add i dates and temperature to chart
				svg.x.domain(array.reverse().map(d => d.date))
				svg.y.domain([0, max(array, d => d.temperature)])

				dispatch({ type: "DAILY_DATA", payload: array });
		});
	}
}

export function callSummaryApi(user){
	return dispatch => {
		//Api call to get the users summary data
		fetch(api[user].summary)
			.then(response => response.json())
			.then((data) => {
				dispatch({ type: "SUMMARY_DATA", payload: data });
			});
	}
}


export function changeUser(user){
	return dispatch => {
		dispatch({ type: "CHANGE_USER", payload: user });
	}
}