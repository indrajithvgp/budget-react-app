import {persistStore} from 'redux-persist'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

