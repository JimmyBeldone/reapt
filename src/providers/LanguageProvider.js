import React, { PureComponent, createContext } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export default class LanguageProvider extends PureComponent {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    updateLanguage = e => this.setState({ lang: e.target.value });

    state = {
        lang: "en",
        updateLanguage: this.updateLanguage
    };

    render() {
        const { lang, updateLanguage } = this.state;
        const { children } = this.props;
        return (
            <LanguageContext.Provider
                value={{
                    lang,
                    updateLanguage
                }}
            >
                {children}
            </LanguageContext.Provider>
        );
    }
}

export const LanguageConsumer = LanguageContext.Consumer;
