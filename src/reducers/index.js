import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { Home, incrementCounter, decrementCounter, resetCounter } from 'reducers/Home'

const store = createStore(
    combineReducers({
        Home
    }),
    applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true})
    )
)

const homeActions = {
    incrementCounter,
    decrementCounter,
    resetCounter
}

export {store, homeActions}