import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'

import routerParamsMiddleware from '../middlewares/routerParamsMiddleware'
import rootReducer from '../reducers'

export const history = createHistory()

const reducer = combineReducers(rootReducer)

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history)
    const middlewares = [thunk, reactRouterMiddleware, routerParamsMiddleware]

    const store = createStore(connectRouter(history)(reducer), initialState, compose(applyMiddleware(...middlewares)))

    return store
}

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history)
    const middlewares = [
        // Add other middleware on this line...

        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunk,
        reactRouterMiddleware,
        routerParamsMiddleware,
        logger
    ]

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools

    const store = createStore(connectRouter(history)(reducer), initialState, composeEnhancers(applyMiddleware(...middlewares)))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default // eslint-disable-line global-require
            store.replaceReducer(connectRouter(history)(combineReducers(nextReducer)))
        })
    }

    return store
}
const configureStore = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
    ? configureStoreProd
    : configureStoreDev

export default configureStore
