import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

// Redux Store
import store from './store'

ReactDOM.render((
		<Provider store={store}>
			<App />
		</Provider>
	), 
	document.getElementById('root')
);

registerServiceWorker();
