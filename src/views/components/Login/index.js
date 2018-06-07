import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './Login.styl'

class Login extends PureComponent {

    static propTypes = {
        
    }

    logUser(e) {
        console.log('log user');
    }

    render() {
        return (
            <form className="login-form">
                <div className="input-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input name="login" className="form-control" type="text" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input name="password" className="form-control" type="password" />
                </div>
                <div className="login-button" onClick={this.logUser.bind(this)}>Login</div>
            </form>
        )
    }
}

export default Login
