import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import configureStore, { history } from "../src/store/configureStore";
import RouteWithSubRoutes from "../src/routes/RouteWithSubRoutes";
import routes from "../src/routes";

const mountContainerWithRouter = (
    state,
    container, // JSX.Element
    pathname,
    search,
    pathToMatch = "/",
    initialEntries = [pathname + search],
    initialIndex = 0
    // actionInterceptor
) => {
    const store = configureStore();

    return mount(
        <MemoryRouter
            initialEntries={initialEntries}
            initialIndex={initialIndex}
        >
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes
                                key={i}
                                {...route}
                                path={pathToMatch}
                                render={() => container}
                            />
                        ))}
                    </div>
                </ConnectedRouter>
            </Provider>
        </MemoryRouter>
    );
};

export default mountContainerWithRouter;
