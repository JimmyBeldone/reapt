import React, { memo } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import { ConnectedRouter } from "connected-react-router";
import cn from "classnames";
import { NamespacesConsumer } from "react-i18next";

import ThemeProvider, { ThemeConsumer } from "./providers/ThemeProvider";
import "./providers/i18nProvider";
// import LanguageProvider, {
//     LanguageConsumer
// } from "./providers/LanguageProvider";
import App from "./App";

const Root = memo(({ store, history }) => (
    <ThemeProvider>
        <ThemeConsumer>
            {({ theme }) => (
                <div className={cn("theme", `theme-${theme}`)}>
                    {/* <LanguageProvider>
                        <LanguageConsumer>
                            {({ lang }) => ( */}
                    {/* <i18nProvider language={lang}> */}
                    <NamespacesConsumer>
                        {() => (
                            <Provider store={store}>
                                <ConnectedRouter history={history}>
                                    <App />
                                </ConnectedRouter>
                            </Provider>
                        )}
                    </NamespacesConsumer>
                    {/* </i18nProvider> */}
                    {/* )}
                        </LanguageConsumer>
                    </LanguageProvider> */}
                </div>
            )}
        </ThemeConsumer>
    </ThemeProvider>
));

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default hot(module)(Root);
