import { combineReducers } from 'redux'
import authReducer from './auth'
import peopleReducer from './people'


const rootReducer = combineReducers({
	auth: authReducer,
	people: peopleReducer
})

export default rootReducer