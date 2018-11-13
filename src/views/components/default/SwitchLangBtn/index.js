import React from "react";
import "./SwitchLangBtn.styl";
import numbro from "numbro";
import dayjs from "dayjs";

import i18nProvider from "../../../../providers/i18nProvider";
import { languages } from "../../../../lang";

/* eslint jsx-a11y/no-onchange: 0 */

const SwitchLangBtn = () => {
    const updateLanguage = e => {
        i18nProvider.changeLanguage(e.currentTarget.value);
        numbro.setLanguage(e.currentTarget.value);
        dayjs.locale(e.currentTarget.value.substring(0, 2));
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
