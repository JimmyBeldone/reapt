import numbro from "numbro";
import numbroFr from "numbro/dist/languages/fr-FR.min.js";
import numbroEnGB from "numbro/dist/languages/en-GB.min.js";

import fr from "./fr";
import en from "./en";

const resources = {
    "fr-FR": {
        translation: fr
    },
    "en-GB": {
        translation: en
    },
    "en-US": {
        translation: en
    }
};

[numbroFr, numbroEnGB].map(lang => {
    numbro.registerLanguage(lang);
});

numbro.registerLanguage({
    ...numbroFr,
    abbreviations: { ...numbroFr.abbreviations, thousand: "K", million: "M" }
});

export const languages = [
    {
        key: "fr-FR",
        lib: "fr"
    },
    {
        key: "en-GB",
        lib: "en(GB)"
    },
    {
        key: "en-US",
        lib: "en(US)"
    }
];

export default resources;
