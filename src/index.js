// Loads vendors and global style
import "./styles/global.styl";
// Loading fonts style sheet separately for webpack to load all files in dist folder
import "./assets/fonts/fonts.styl";

import React from "react";
import { render } from "react-dom";

import configureStore, { history } from "./store/configureStore";
import Root from "./Root";

const store = configureStore();
window.lang = "fr";

render(
    <Root store={store} history={history} />,
    document.getElementById("app")
);

// register service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js")
            .then(registration => {
                console.log("SW registered: ", registration);
            })
            .catch(registrationError => {
                console.log("SW registration failed: ", registrationError);
            });
    });
}
