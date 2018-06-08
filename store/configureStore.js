import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2
}

//const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (initialState : Object) => {
	let store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
	//let persistor = persistStore(store);
	return {store:store};//, persistor:persistor};
}

export default configureStore