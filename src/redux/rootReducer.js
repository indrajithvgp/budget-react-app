import {persistReducer} from 'redux-persist'
import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import entriesReducer from './reducers/entriesReducer'
import modalReducer from './reducers/modalReducer'

const rootReducer = combineReducers({
    entries:entriesReducer,
    modal:modalReducer
})

const persistConfig ={
    key:"root",
    storage,
    whitelist:['entries', 'modal']
}

export default persistReducer(persistConfig, rootReducer)