import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Router, Switch, Redirect} from 'react-router-dom'

import RouteWithSubRoutes from './routes/RouteWithSubRoutes'
import getRoutesByEnv from './routes'

import DefaultLayout from './views/layouts/DefaultLayout'

// HMR doesn't work with react loadable,
// so as a temporary fix, disable codesplitting in dev mode
const routes = getRoutesByEnv(process.env.NODE_ENV)

class App extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    render () {
        const {history} = this.props
        const style = {color: 'red'}
        return (
            <DefaultLayout>
                <Router history={history}>
                    <Switch>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </Switch>
                </Router>
            </DefaultLayout>
        )
    }
}

export default App
