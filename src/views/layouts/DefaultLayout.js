import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const DefaultLayout = memo(({ children }) => (
    <Fragment>
        <Header />
        <div id="content">{children}</div>
        <Footer />
    </Fragment>
));

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default DefaultLayout;
