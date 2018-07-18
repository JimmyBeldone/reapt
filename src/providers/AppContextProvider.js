import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ThemeProvider, {ThemeConsumer} from './ThemeProvider'

export default class AppContextProvider extends PureComponent {

    static propTypes = {
        children: PropTypes.element.isRequired
    }

    render() {
        return (
            <ThemeProvider>
                <ThemeConsumer>
                    {({theme}) => (
                        <div className={cn('theme', `theme-${theme}`)}>
                            {this.props.children}
                        </div>
                    )}
                </ThemeConsumer>
            </ThemeProvider>
        )
    }
}
