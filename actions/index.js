import auth from '../api/auth'
import people from '../api/people'
import dialogs from '../api/dialogs'
import messages from '../api/messages'
import * as types from '../constants/ActionTypes'

export const loginAttempt = (username, password) => (dispatch) => {


	dispatch({
		type: types.LOGIN_ATTEMPT_REQUEST,
		username
	})


	auth.loginAttempt(username, password,
		(accessToken, refreshToken) => {
			dispatch({
				type: types.LOGIN_ATTEMPT_SUCCESS,
				accessToken,
				refreshToken,
			})
		},
		(error) => {
			dispatch({
				type: types.LOGIN_ATTEMPT_FAILURE,
				error,
			})
		}
	)
}

export const registerAttempt = (email, username, password) => (dispatch) => {

	dispatch({
		type: types.REGISTER_ATTEMPT_REQUEST,
		username
	})

	auth.registerAttempt(email, username, password,
		(accessToken, refreshToken) => {
			dispatch({
				type: types.REGISTER_ATTEMPT_SUCCESS,
				accessToken,
				refreshToken
			})
		},
		(error) => {
			dispatch({
				type: types.REGISTER_ATTEMPT_FAILURE,
				error
			})
		}
	)

}

export const getPeopleLikeMe = (accessToken) => (dispatch) => {
	dispatch({
		type: types.PEOPLE_GET_REQUEST
	})

	people.getPeopleLikeMe(accessToken,
		(people) => {
			dispatch({
				type: types.PEOPLE_GET_SUCCESS,
				people
			})
		},
		(error) => {
			dispatch({
				type: types.PEOPLE_GET_FAILURE,
				error
			})
		}
	)
}

export const resetPeople = (accessToken) => (dispatch) => {
	dispatch({
		type: types.PEOPLE_RESET
	})
}

export const resetDialogs = (accessToken) => (dispatch) => {
	dispatch({
		type: types,DIALOGS_RESET
	})
}

export const resetMessages = (accessToken) => (dispatch) => {
	dispatch({
		type: types.MESSAGES_RESET
	})
}

export const getDialogs = (accessToken) => (dispatch) => {
	dispatch({
		type: types.DIALOGS_GET_REQUEST
	})

	dialogs.getDialogs(accessToken,
		(dialogs) => {
			dispatch({
				type: types.DIALOGS_GET_SUCCESS,
				dialogs
			})
		},
		(error) => {
			dispatch({
				type: types.DIALOGS_GET_FAILURE,
				error
			})
		}
	)
}

export const getMessages = (accessToken, target) => (dispatch) => {
	dispatch({
		type: types.MESSAGES_GET_REQUEST
	})

	messages.getMessages(accessToken,target,'False',
		(messages) => {
			dispatch({
				type: types.MESSAGES_GET_SUCCESS,
				messages
			})
		},
		(error) => {
			dispatch({
				type: types.MESSAGES_GET_FAILURE,
				error
			})
		}
	)
}

export const refreshMessages = (accessToken, target) => (dispatch) => {
	dispatch({
		type: types.MESSAGES_REFRESH_REQUEST
	})

	messages.getMessages(accessToken,target,'True',
		(messages) => {
			dispatch({
				type: types.MESSAGES_REFRESH_SUCCESS,
				messages
			})
		},
		(error) => {
			dispatch({
				type: types.MESSAGES_REFRESH_FAILURE,
				error
			})
		}
	)
}

export const sendMessage = (accessToken, target, message) => (dispatch) => {
	console.log('send_action');
	dispatch({
		type: types.ADD_MESSAGE,
		msg: message
	});
	messages.sendMessage(accessToken,target,message,
		() => {
			dispatch({
				type: types.MESSAGE_SENT
			})
		},
	)
}