import auth from '../api/auth'
import people from '../api/people'
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