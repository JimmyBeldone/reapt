import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'

import './Header.styl'
import SwitchLangBtn from '../../components/default/SwitchLangBtn'
import SwitchThemeBtn from '../../components/default/SwitchThemeBtn'

class Header extends PureComponent {
    render () {
        return (
            <header>
                <SwitchThemeBtn />
                <SwitchLangBtn />
            </header>
        );
    }
}

export default Header
