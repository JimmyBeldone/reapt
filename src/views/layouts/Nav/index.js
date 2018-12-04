import React from "react";
import { Link } from "react-router-dom";

import "./Nav.styl";

const Nav = () => (
    <div id="main-nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
    </div>
);

export default Nav;
