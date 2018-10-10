import React from "react";
// import PropTypes from 'prop-types'

import "./Header.styl";
import SwitchLangBtn from "../../components/default/SwitchLangBtn";
import SwitchThemeBtn from "../../components/default/SwitchThemeBtn";

const Header = () => (
    <header>
        <SwitchThemeBtn />
        <SwitchLangBtn />
    </header>
);

export default Header;
