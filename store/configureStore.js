import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const configureStore = (initialState : Object) => {
	return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}

export default configureStore