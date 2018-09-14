import { matchPath } from 'react-router-dom';

import routes from '../routes';
import { getPageName } from "../managers/routerManger";

export default store => next => (action) => {
    if (undefined !== action && (action.type === '@@router/LOCATION_CHANGE')) {
        let match = null;
        for (let i = 0, l = routes.length; i < l; i++) {
            match = matchPath(action.payload.location.pathname, routes[i]);
            if (match !== null) {
                break;
            }
        }
        if (match === undefined || match === null) {
            action.payload.match = {
                isExact: false,
                params: {}
            };
            action.payload.pageName = '404';
        } else {
            action.payload.match = match;
            action.payload.pageName = getPageName(match.url);
        }
    }

    return next(action);
};
