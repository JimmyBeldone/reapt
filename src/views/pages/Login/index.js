import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import './LoginPage.styl'
import Login from '../../components/Login'

class LoginPage extends PureComponent {

    render() {
        return (
            <div id="loginpage">
                <div className="login-bloc">
                    <Login />
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage)
