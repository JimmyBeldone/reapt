import React, { memo } from "react";

import "./SwitchLangBtn.styl";
import { LanguageConsumer } from "../../../../providers/LanguageProvider";

/* eslint jsx-a11y/no-onchange: 0 */

const SwitchLangBtn = memo(() => (
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
));

export default SwitchLangBtn;
