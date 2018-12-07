import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { hot, setConfig } from "react-hot-loader";
import { ConnectedRouter } from "connected-react-router";
import cn from "classnames";
import { NamespacesConsumer } from "react-i18next";

import ThemeProvider, { ThemeConsumer } from "./providers/ThemeProvider";
import "./providers/i18nProvider";
import App from "./App";

const Root = ({ store, history }) => (
    <ThemeProvider>
        <ThemeConsumer>
            {({ theme }) => (
                <div className={cn("theme", `theme-${theme}`)}>
                    <NamespacesConsumer>
                        {() => (
                            <Provider store={store}>
                                <ConnectedRouter history={history}>
                                    <App />
                                </ConnectedRouter>
                            </Provider>
                        )}
                    </NamespacesConsumer>
                </div>
            )}
        </ThemeConsumer>
    </ThemeProvider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

setConfig({ pureRender: true });

export default hot(module)(Root);
