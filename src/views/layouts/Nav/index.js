import React, { memo } from "react";
import { Link } from "react-router-dom";

import "./Nav.styl";

const Nav = memo(() => (
    <div id="main-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
));

export default Nav;
