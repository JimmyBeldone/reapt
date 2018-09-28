import { matchPath } from 'react-router-dom'
import { LOCATION_CHANGE } from 'connected-react-router'

import routesPath from '../routes/routesPath'
import { getPageName } from '../managers/routerManger'

const RouterParamsMiddleware = store => next => action => {
    if (action.type === LOCATION_CHANGE) {
        let match = null
        for (let i = 0, l = routesPath.length; i < l; i++) {
            match = matchPath(action.payload.location.pathname, routesPath[i])
            if (match !== null) {
                break
            }
        }
        if (match === undefined || match === null) {
            action.payload.match = {
                isExact: false,
                params: {}
            }
            action.payload.pageName = '404'
        } else {
            action.payload.match = match
            action.payload.pageName = getPageName(match.url)
        }
    }
    next(action);
}

export default RouterParamsMiddleware
