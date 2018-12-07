import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { featuresReducers } from "../views/features";

import exampleReducer from "./exampleReducer";
import errorReducer from "./errorReducer";

export default history => {
    let rootReducer = {
        exampleReducer,
        errors: errorReducer,
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
