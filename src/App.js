import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'react-router-dom'
import noInternet from 'no-internet'

import RouteWithSubRoutes from './routes/RouteWithSubRoutes'
import getRoutesByEnv from './routes'
import DefaultLayout from './views/layouts/DefaultLayout'
import ModalProvider from './providers/ModalProvider'
import ModalRoot from './views/components/default/Modals'

// HMR doesn't work with react loadable,
// so as a temporary fix, disable codesplitting in dev mode
const routes = getRoutesByEnv(process.env.NODE_ENV)

class App extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    constructor(props) {
        super(props)
        this.state = {
            isOffline: false
        }
    }

    componentDidMount() {
        // Single check
        noInternet()
        .then(offline => {
            if (offline) {
                this.setState({ isOffline: true })
            }
        })
        // Interval check
        // noInternet({
        //     callback: offline => {
        //         if (offline) {
        //             this.setState({isOffline: true})
        //         } else {
        //             this.setState({isOffline: false})
        //         }
        //     }
        // })
    }

    render () {
        return (
            <ModalProvider>
                <ModalRoot />
                <DefaultLayout>
                    <Switch>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </Switch>
                </DefaultLayout>
                {this.state.isOffline ? (
                    <div className="offline-info">
                        You are offline
                    </div>
                ) : null}
            </ModalProvider>
        )
    }
}

export default App
