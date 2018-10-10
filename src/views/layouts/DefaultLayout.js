import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav";

class DefaultLayout extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <Header />
                <Nav />
                <div className="content">{children}</div>
                <Footer />
            </Fragment>
        );
    }
}

export default DefaultLayout;
