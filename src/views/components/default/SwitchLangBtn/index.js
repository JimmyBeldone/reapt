import React from 'react'
// import PropTypes from 'prop-types'

import './SwitchLangBtn.styl'
import { LanguageConsumer } from '../../../../providers/LanguageProvider'

const SwitchLangBtn = () => (
    <LanguageConsumer>
        {({ lang, updateLanguage }) => (
            <div className="swith-lang-bloc">
                <select onChange={updateLanguage} value={lang}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
        )}
    </LanguageConsumer>
)

export default SwitchLangBtn
