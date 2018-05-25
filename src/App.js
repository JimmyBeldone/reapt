import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'

import DefaultLayout from './views/layouts/DefaultLayout'
import LoadingPage from './views/components/default/LoadingPage/LoadingPage'

const AsyncHomePage = Loadable({
    loader: () => import('./views/pages/HomePage/HomePage'),
    loading: LoadingPage
})

const AsyncNotFound = Loadable({
    loader: () => import('./views/pages/NotFound/NotFound'),
    loading: LoadingPage
})

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
                        {/* {window.location.pathname.includes('index.html') && <Redirect to="/" />} */}
                        <Route exact path="/" component={AsyncHomePage} />
                        <Route exact path="/test" component={AsyncNotFound} />
                    </Switch>
                </Router>
            </DefaultLayout>
        )
    }
}

export default App
