import {
	MESSAGES_GET_REQUEST,
	MESSAGES_GET_SUCCESS,
	MESSAGES_GET_FAILURE,
	MESSAGES_REFRESH_REQUEST,
	MESSAGES_REFRESH_SUCCESS,
	MESSAGES_REFRESH_FAILURE,
	MESSAGES_RESET,
	MESSAGE_SENT,
	ADD_MESSAGE
} from '../constants/ActionTypes'

const initialState = {
	messagesLoaded: false,
	messages: [],
	needRefresh: true
}

export const getNeedRefreshSelector = (state) => state.messages.needRefresh;
export const checkIfMessagesLoadedSelector = (state) => state.messages.messagesLoaded;
export const getMessagesSelector = (state) => state.messages.messages;

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case MESSAGES_REFRESH_REQUEST:
		case MESSAGES_GET_REQUEST:
			return Object.assign({}, state, {
				needRefresh: false
			})
		case MESSAGES_GET_SUCCESS:
			return Object.assign({}, state, {
				messagesLoaded: true,
				messages: action.messages,
				needRefresh: false
			})
		case MESSAGES_REFRESH_SUCCESS:
			return Object.assign({}, state, {
				messages: [...state.messages, ...action.messages],
				needRefresh: false
			})
		case ADD_MESSAGE:
			let newMsg = {
				sent_from: {
					name: ''
				},
				text: action.msg
			}
			return Object.assign({}, state, {
				messages: [...state.messages, ...[newMsg]]
			})
		case MESSAGES_REFRESH_FAILURE:
		case MESSAGES_GET_FAILURE:
			return Object.assign({}, state, {
				messagesLoaded: false,
				messages: [],
				needRefresh: true
			})
		case MESSAGES_RESET:
			return Object.assign({}, state, {
				messagesLoaded: false,
				messages: [],
				needRefresh: true
			})
		case MESSAGE_SENT:
			return Object.assign({}, state, {
				needRefresh: true
			})
		default:
			return state
	}
}

export default messagesReducer