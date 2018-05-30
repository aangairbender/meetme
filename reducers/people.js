import {
	PEOPLE_GET_REQUEST,
	PEOPLE_GET_SUCCESS,
	PEOPLE_GET_FAILURE,
	PEOPLE_RESET
} from '../constants/ActionTypes'

const initialState = {
	peopleLoaded: false,
	people: []
}

export const checkIfPeopleLoadedSelector = (state) => state.people.peopleLoaded
export const getPeopleSelector = (state) => state.people.people

const peopleReducer = (state = initialState, action) => {
	switch (action.type) {
		case PEOPLE_GET_REQUEST:
			return Object.assign({}, state, {
				peopleLoaded: false
			})
		case PEOPLE_GET_SUCCESS:
			return Object.assign({}, state, {
				peopleLoaded: true,
				people: action.people
			})
		case PEOPLE_GET_FAILURE:
			return Object.assign({}, state, {
				peopleLoaded: false,
				people: []
			})
		case PEOPLE_RESET:
			return Object.assign({}, state, {
				peopleLoaded: false,
				people: []
			})
		default:
			return initialState;
	}
}

export default peopleReducer