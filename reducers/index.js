import { combineReducers } from 'redux'
import authReducer from './auth'
import peopleReducer from './people'
import dialogsReducer from './dialogs'
import messagesReducer from './messages'


const rootReducer = combineReducers({
	auth: authReducer,
	people: peopleReducer,
	dialogs: dialogsReducer,
	messages: messagesReducer
})

export default rootReducer