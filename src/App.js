import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import noInternet from "no-internet";

import RouteWithSubRoutes from "./routes/RouteWithSubRoutes";
import routes from "./routes";
import DefaultLayout from "./views/layouts/DefaultLayout";
import ModalProvider from "./providers/ModalProvider";
import ModalRoot from "./views/components/default/Modals";
import ScrollToTop from "./views/containers/ScrollToTop";
import LoadingPage from "./views/components/default/LoadingPage/LoadingPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOffline: false
        };
    }

    componentDidMount() {
        // Single check
        noInternet().then(offline => {
            if (offline) {
                this.setState({ isOffline: true });
            }
        });
        // Interval check
        // noInternet({
        //     callback: offline => {
        //         if (offline) {
        //             this.setState({isOffline: true})
        //         } else {
        //             this.setState({isOffline: false})
        //         }
        //     }
        // })
    }

    render() {
        const { isOffline } = this.state;
        return (
            <ModalProvider>
                <ModalRoot />
                <DefaultLayout>
                    <ScrollToTop>
                        <Suspense fallback={<LoadingPage />}>
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </Switch>
                        </Suspense>
                    </ScrollToTop>
                </DefaultLayout>
                {isOffline ? (
                    <div className="offline-info">You are offline</div>
                ) : null}
            </ModalProvider>
        );
    }
}

export default App;
