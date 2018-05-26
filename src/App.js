import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Router, Switch, Redirect} from 'react-router-dom'

import RouteConfig from './routes'
import DefaultLayout from './views/layouts/DefaultLayout'

class App extends PureComponent {

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
                        <RouteConfig />
                    </Switch>
                </Router>
            </DefaultLayout>
        )
    }
}

export default App
