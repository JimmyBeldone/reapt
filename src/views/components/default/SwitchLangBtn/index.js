import React from "react";
import "./SwitchLangBtn.styl";
import numbro from "numbro";

import i18nProvider from "../../../../providers/i18nProvider";
import { languages } from "../../../../lang";

/* eslint jsx-a11y/no-onchange: 0 */

const SwitchLangBtn = () => {
    const updateLanguage = e => {
        i18nProvider.changeLanguage(e.currentTarget.value);
        numbro.setLanguage(e.currentTarget.value);
    };

    return (
        <div className="swith-lang-bloc">
            <select
                onChange={e => updateLanguage(e)}
                defaultValue={i18nProvider.language}
            >
                {languages.map((lang, i) => (
                    <option key={lang.lib + i} value={lang.key}>
                        {lang.lib}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SwitchLangBtn;
