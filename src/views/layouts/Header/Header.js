import React, { memo } from "react";
// import PropTypes from 'prop-types'

import "./Header.styl";
import SwitchLangBtn from "../../components/default/SwitchLangBtn";
import SwitchThemeBtn from "../../components/default/SwitchThemeBtn";

const Header = memo(() => (
    <header>
        <SwitchThemeBtn />
        <SwitchLangBtn />
    </header>
));

export default Header;
