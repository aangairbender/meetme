import {
	DIALOGS_GET_REQUEST,
	DIALOGS_GET_SUCCESS,
	DIALOGS_GET_FAILURE,
	DIALOGS_RESET
} from '../constants/ActionTypes'

const initialState = {
	dialogsLoaded: false,
	dialogs: []
}

export const checkIfDialogsLoadedSelector = (state) => state.dialogs.dialogsLoaded;
export const getDialogsSelector = (state) => state.dialogs.dialogs;

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case DIALOGS_GET_REQUEST:
			return Object.assign({}, state, {
				dialogsLoaded: false
			})
		case DIALOGS_GET_SUCCESS:
			/*let d = {}
			for (let c : action.dialogs) {
				let x = c.sent_from.id;
				let y = c.sent_to.id;
				if (x > y) {let z = x; x = y; y = z;}
				let t = c.date;
				let obj = {
					a : x,
					b : y,
				}
				if (d[obj].ti < t) {
					d[obj] = {
						ti = t,
						data = c
					}
				}
			}
			console.log(d)
			let res = []
			for (let x : d) {
				let y = d[x]
				res.push(y.data)
			}
			res.sort(function(a, b){
				return b.time - a.time;
			})*/
			return Object.assign({}, state, {
				dialogsLoaded: true,
				dialogs: action.dialogs
			})
		case DIALOGS_GET_FAILURE:
			return Object.assign({}, state, {
				dialogsLoaded: false,
				dialogs: []
			})
		case DIALOGS_RESET:
			return Object.assign({}, state, {
				dialogsLoaded: false,
				dialogs: []
			})
		default:
			return state
	}
}

export default dialogsReducer