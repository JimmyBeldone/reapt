import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { featuresReducers } from "../views/features";

import exempleReducer from "./exempleReducer";

export default history => {
    let rootReducer = {
        exempleReducer,
        router: connectRouter(history)
    };

    // Add all reducers from features
    featuresReducers().map(reducer => {
        rootReducer = Object.assign(
            { [reducer.name]: reducer.reducer },
            rootReducer
        );
    });

    return combineReducers(rootReducer);
};
