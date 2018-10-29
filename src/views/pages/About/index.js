import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import RouteWithSubRoutes from "../../../routes/RouteWithSubRoutes";
import { PAGE_ABOUT_ONE, PAGE_ABOUT_TWO } from "../../../constants/router";

import "./About.styl";

const About = memo(({ routes }) => (
    <div>
        <div className="about">
            <Link to={PAGE_ABOUT_ONE}>One</Link>
            <Link to={PAGE_ABOUT_TWO}>Two</Link>
        </div>
        {/* Nested routes */}
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </div>
));

About.propTypes = {
    routes: PropTypes.array.isRequired
};

export default About;
