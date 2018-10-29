import React, { Fragment, memo } from "react";
// import PropTypes from 'prop-types'

import { ThemeConsumer } from "../../../../providers/ThemeProvider";

const SwitchThemeBtn = memo(() => (
    <div className="switch-theme">
        Theme:
        <ThemeConsumer>
            {({ toggleTheme, theme }) => (
                <Fragment>
                    <input
                        id="theme"
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    <label htmlFor="theme">Dark</label>
                </Fragment>
            )}
        </ThemeConsumer>
    </div>
));

export default SwitchThemeBtn;
