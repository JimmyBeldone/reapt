import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'

import { flattenMessages } from '../utils/lang'

const fr = require('react-intl/locale-data/fr')
const en = require('react-intl/locale-data/en')

const lang = require('../lang')

addLocaleData([...fr, ...en])

// let locale =
//     (navigator.languages && navigator.languages[0]) ||
//     navigator.language ||
//     navigator.userLanguage ||
//     'fr-FR'

let i18nConfig = {
    // locale: locale,
    messages: lang
}

class ReactIntlProvider extends PureComponent {

    static propTypes = {
        children: PropTypes.element.isRequired,
        language: PropTypes.string.isRequired
    }

    render() {
        const { language, children } = this.props
        return (
            <IntlProvider
                locale={language}
                messages={flattenMessages(i18nConfig.messages[language])}
            >
                { React.Children.only(children) }
            </IntlProvider>
        )
    }
}

export default ReactIntlProvider
