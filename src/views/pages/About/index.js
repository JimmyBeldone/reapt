import React from "react";
import PropTypes from "prop-types";

import RouteWithSubRoutes from "../../../routes/RouteWithSubRoutes";

import AboutTemplate from "./AboutTemplate";
import "./About.styl";

const About = ({ routes }) => (
    <div>
        <AboutTemplate />
        {/* Nested routes */}
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </div>
);

About.propTypes = {
    routes: PropTypes.array.isRequired
};

export default About;
