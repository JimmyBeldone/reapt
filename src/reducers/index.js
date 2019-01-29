import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { featuresReducers } from "../views/features";

import exampleReducer from "./exampleReducer";
import routerReducer from "./routerReducer";
import errorReducer from "./errorReducer";

export default history => {
    let rootReducer = {
        exampleReducer,
        errors: errorReducer,
        router: connectRouter(history),
        routerMatch: routerReducer
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
