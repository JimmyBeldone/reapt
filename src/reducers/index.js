// import { combineReducers } from 'redux'
import { featuresReducers } from "../features";

import exempleReducer from "./exempleReducer";

let rootReducer = {
    exempleReducer
};

// Add all reducers from features
featuresReducers().map(reducer => {
    rootReducer = Object.assign(
        { [reducer.name]: reducer.reducer },
        rootReducer
    );
});

const reducers = rootReducer;

export default reducers;
