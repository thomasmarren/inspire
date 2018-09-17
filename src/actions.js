import api from './utils/api.js';

export function getApi(){
	return dispatch => {
		fetch(api.user1.daily)
			.then(response => response.json())
			.then((data) => {
					dispatch({ type: "API_DATA", payload: data });
			});
	}
}