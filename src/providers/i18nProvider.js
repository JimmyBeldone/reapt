import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import numbro from "numbro";

import resources from "../lang";

i18n.use(detector)
    .use(reactI18nextModule)
    .init({
        resources,
        // lng: "en",
        fallbackLng: "en",
        // keySeparator: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            wait: true
        }
    });

numbro.setLanguage(i18n.language);

export default i18n;
