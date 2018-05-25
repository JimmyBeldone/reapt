import React, {PureComponent} from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'

import ReactIntlProvider from './providers/ReactIntlProvider'
import App from './App'

class Root extends PureComponent {

    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render () {
        const { store, history } = this.props
        return (
            <ReactIntlProvider>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <App history={history} />
                    </ConnectedRouter>
                </Provider>
            </ReactIntlProvider>
        )
    }
}

export default hot(module)(Root)
