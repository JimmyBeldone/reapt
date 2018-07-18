import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'

import './Header.styl'
import {ThemeConsumer} from '../../../providers/ThemeProvider'
import SwitchLangBtn from '../../components/default/SwitchLangBtn'

class Header extends PureComponent {
    render () {
        return (
            <header>
                <h1>Header</h1>
                <div className="switch-theme">
                    Theme:
                    <ThemeConsumer>
                        {({toggleTheme, theme}) => (
                            <Fragment>
                                <input
                                    id="theme"
                                    type="checkbox"
                                    onChange={toggleTheme}
                                    checked={theme === 'dark'}
                                />
                                <label htmlFor="theme">Dark</label>
                            </Fragment>
                        )}
                    </ThemeConsumer>
                </div>
                <SwitchLangBtn />
            </header>
        );
    }
}

export default Header
