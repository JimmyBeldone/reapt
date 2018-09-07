import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext()

export default class LanguageProvider extends PureComponent {

    static propTypes = {
        children: PropTypes.element.isRequired
    }

    updateLanguage = e => this.setState({ lang: e.target.value })

    state = {
        lang: 'en',
        updateLanguage: this.updateLanguage
    }

    render() {
        return (
            <LanguageContext.Provider value={{ lang: this.state.lang, updateLanguage: this.state.updateLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export const LanguageConsumer = LanguageContext.Consumer
