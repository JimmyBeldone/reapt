import { matchPath } from "react-router-dom";
import { LOCATION_CHANGE } from "connected-react-router";

import routesPath from "../routes/routesPath";
import { UPDATE_ROUTER } from "../reducers/routerReducer";

/* eslint no-param-reassign: ["error", { "props": false }] */

const RouterParamsMiddleware = ({ dispatch }) => next => action => {
    if (action.type === LOCATION_CHANGE) {
        let match = null;
        for (let i = 0, l = routesPath.length; i < l; i += 1) {
            // eslint-disable-next-line security/detect-object-injection
            match = matchPath(action.payload.location.pathname, routesPath[i]);
            if (match !== null) {
                break;
            }
        }
        if (match === undefined || match === null) {
            action.payload.match = {
                isExact: false,
                params: {}
            };
            action.payload.pageName = "404";
        } else {
            const routerMatch = {
                match,
                pageName: match.url
            };

            dispatch({
                type: UPDATE_ROUTER,
                payload: routerMatch
            });
        }
    }
    next(action);
};

export default RouterParamsMiddleware;
