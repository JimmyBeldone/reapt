export default (env) => {
    let routes
    if (env === 'development') {
        routes = require('./routes')
    } else {
        routes = require('./routesProd')
    }
    return routes.default
}
