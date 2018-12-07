import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

import "./Nav.styl";

import {
    PAGE_HOME,
    PAGE_REGISTER,
    PAGE_LOGIN,
    PAGE_ABOUT
} from "../../../constants/router";

const Nav = () => (
    <div id="main-nav">
        <Link to={PAGE_HOME}>
            <Trans i18nKey="nav.home" />
        </Link>
        <Link to={PAGE_LOGIN}>
            <Trans i18nKey="nav.login" />
        </Link>
        <Link to={PAGE_REGISTER}>
            <Trans i18nKey="nav.register" />
        </Link>
        <Link to={PAGE_ABOUT}>
            <Trans i18nKey="nav.about" />
        </Link>
    </div>
);

export default Nav;
