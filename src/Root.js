import React, {PureComponent} from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { ConnectedRouter } from 'connected-react-router'
import cn from 'classnames'

import ThemeProvider, {ThemeConsumer} from './providers/ThemeProvider'
import ReactIntlProvider from './providers/ReactIntlProvider'
import LanguageProvider, {LanguageConsumer} from './providers/LanguageProvider'
import App from './App'

class Root extends PureComponent {

    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render () {
        const { store, history } = this.props
        return (
            <ThemeProvider>
                <ThemeConsumer>
                {({theme}) => (
                    <div className={cn('theme', `theme-${theme}`)}>
                        <LanguageProvider>
                            <LanguageConsumer>
                            {({lang}) => (
                                <ReactIntlProvider language={lang}>
                                    <Provider store={store}>
                                        <ConnectedRouter history={history}>
                                            <App history={history} />
                                        </ConnectedRouter>
                                    </Provider>
                                </ReactIntlProvider>
                            )}
                            </LanguageConsumer>
                        </LanguageProvider>
                    </div>
                )}
                </ThemeConsumer>
            </ThemeProvider>
        )
    }
}

export default hot(module)(Root)
