import React from 'react'
import {Route} from 'react-router-dom'

import routes from './routes'

const RouteWithSubRoutes = route => {
    console.log(route);
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
)
}

const RouteConfig = () => (
    <div>
        {/* {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
        {routes.map((route, i) => <Route key={i} {...route} />)}
     </div>
)

export default RouteConfig
