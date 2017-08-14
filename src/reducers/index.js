import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware, routerReducer} from 'react-router-redux'

import { Home, incrementCounter, decrementCounter, resetCounter } from 'reducers/Home'

const history = createHistory()
const routingMiddleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        Home,
        router: routerReducer
    }),
    applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true}),
        routingMiddleware
    )
)

const homeActions = {
    incrementCounter,
    decrementCounter,
    resetCounter
}

export {store, history, homeActions}