import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import reducer from './reducers'

const store = createStore(
  reducer,
	  compose(
	    applyMiddleware(
	      thunkMiddleware,
	      createLogger
	    )
	  )
)

export default store