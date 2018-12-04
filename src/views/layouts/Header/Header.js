import React from "react";
// import PropTypes from 'prop-types'

import "./Header.styl";
import SwitchLangBtn from "../../components/default/SwitchLangBtn";
// import SwitchThemeBtn from "../../components/default/SwitchThemeBtn";
import Nav from "../Nav";

const Header = () => (
    <header>
        <div className="container">
            <div className="content">
                <h1>REAPT</h1>
                <Nav />
                {/* <SwitchThemeBtn /> */}
                <SwitchLangBtn />
            </div>
        </div>
    </header>
);

export default Header;
