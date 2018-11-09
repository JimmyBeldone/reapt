import React from "react";

import "./SwitchLangBtn.styl";
import i18nProvider from "../../../../providers/i18nProvider";

/* eslint jsx-a11y/no-onchange: 0 */

const SwitchLangBtn = () => {
    const updateLanguage = e => {
        i18nProvider.changeLanguage(e.currentTarget.value);
    };

    return (
        <div className="swith-lang-bloc">
            <select
                onChange={e => updateLanguage(e)}
                defaultValue={i18nProvider.language}
            >
                <option value="fr">FR</option>
                <option value="en">EN</option>
            </select>
        </div>
    );
};

export default SwitchLangBtn;
