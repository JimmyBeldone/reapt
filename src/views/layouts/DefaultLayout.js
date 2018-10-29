import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav";

const DefaultLayout = memo(({ children }) => (
    <Fragment>
        <Header />
        <Nav />
        <div className="content">{children}</div>
        <Footer />
    </Fragment>
));

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default DefaultLayout;
