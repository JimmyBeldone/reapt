import React, {PureComponent, createContext} from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export default class ThemeProvider extends PureComponent {

    static propTypes = {
        children: PropTypes.element.isRequired
    }

    toggleTheme = (e) => {
        this.setState({theme: e.target.checked ? 'dark' : 'light'})
    }

    state = {
        theme: 'light',
        toggleTheme: this.toggleTheme
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                { this.props.children }
            </ThemeContext.Provider>
        )
    }
}

export const ThemeConsumer = ThemeContext.Consumer