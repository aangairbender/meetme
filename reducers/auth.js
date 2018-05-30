import {
	LOGIN_ATTEMPT_REQUEST,
	LOGIN_ATTEMPT_SUCCESS,
	LOGIN_ATTEMPT_FAILURE,
	REGISTER_ATTEMPT_REQUEST,
	REGISTER_ATTEMPT_SUCCESS,
	REGISTER_ATTEMPT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
	accessToken: "",
	refreshToken: "",
	isAttempting: false,
	lastError: "",
	loggedIn: false,
	username: ""
}

export const getUsernameSelector = (state) => state.auth.username;
export const getAccessTokenSelector = (state) => {console.log(state); return state.auth.accessToken;}
export const getLastErrorSelector = (state) => state.auth.lastError;
export const isLoggedInSelector = (state) => state.auth.loggedIn;

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_ATTEMPT_REQUEST:
		case LOGIN_ATTEMPT_REQUEST:
			return Object.assign({}, state, {
				isAttempting: true,
				username: action.username
			})
		case REGISTER_ATTEMPT_SUCCESS:
		case LOGIN_ATTEMPT_SUCCESS:
			return Object.assign({}, state, {
				loggedIn: true,
				isAttempting: false,
				accessToken: action.accessToken,
				refreshToken: action.refreshToken,
				lastError: ""
			})
		case REGISTER_ATTEMPT_FAILURE:
		case LOGIN_ATTEMPT_FAILURE:
			console.log(action)
			return Object.assign({}, state, {
				loggedIn: false,
				isAttempting: false,
				lastError: action.error,
			})
		default:
			return initialState;
	}
}

export default authReducer