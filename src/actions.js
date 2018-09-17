export function test(){
	return function(dispatch) {
		dispatch({
			type: "TEST", 
			payload: "This is a new sentence on load"
		});
	}
}