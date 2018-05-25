import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import exempleReducer from './exempleReducer'

const rootReducer = {
    routing: routerReducer,
    exempleReducer
}

export default rootReducer
