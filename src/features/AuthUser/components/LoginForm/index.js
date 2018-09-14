import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import './LoginForm.styl'

import { loginUser } from '../../actions'
import { configLogin } from '../../config'

const mapStateToProps = state => ({
    loginError: state.auth.error,
    loginMessage: state.auth.message
})

const mapDispatchToProps = dispatch => ({
    loginUser: (username, password) => dispatch(loginUser(username, password))
})

class LoginForm extends PureComponent {

    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        loginError: PropTypes.bool.isRequired
    }
    usernameInput = null
    passwordInput = null

    handleSubmit(e) {
        e.preventDefault()
        const username = this.usernameInput === null ? '' : this.usernameInput.value.trim()
        const password = this.passwordInput === null ? '' : this.passwordInput.value.trim()
        if (username.length > 0 && password.length > 0) {
            this.props.loginUser(username, password)
        }
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input name="login" className="form-control" type="text" ref={input => { this.usernameInput = input }} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">
                        Mot de passe
                    </label>
                    <input name="password" className="form-control" type="password" ref={input => { this.passwordInput = input }} />
                </div>
                <div className="login-error-message">
                    {!this.props.loginError ? null : <FormattedMessage id="home.loginError"/>}
                </div>
                <button className="btn" type="submit">Valider</button>
                <Link to={configLogin.passwordPath}>
                    <div className="home-link">
                        Mot de passe oublié ?
                    </div>
                </Link>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
