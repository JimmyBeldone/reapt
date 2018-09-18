import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import './LoginForm.styl'

import { loginUser } from '../../actions'
import { configLogin } from '../../config'
import { isEmptyField } from '../../utils'
import InputGroup from '../../../../views/components/default/InputGroup/InputGroup'

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

    state = {
        hasError: false,
        errorField: '',
        errorMessage: ''
    }

    handleSubmit(e) {
        e.preventDefault()
        const fields = this.refs
        const errors = []

        const username = fields['input-username'].input
        const password = fields['input-password'].input

        Object.values(fields).filter(field => {
            const value = field.input.value
            if (isEmptyField(value)) {
                errors.push({
                    hasError: true,
                    errorField: field.input.getAttribute('lib'),
                    errorMessage: 'errors.emptyField'
                })
            }
        })
        if (errors.length !== 0) {
            this.setState(errors[0])
        } else {
            this.setState({ hasError: false, errorField: '', errorMessage: '' })
            this.props.loginUser(username.value.trim(), password.value.trim())
        }
    }

    renderFields() {
        return configLogin.fields.map(field => (
            <InputGroup
                key={`login-input-${field.name}`}
                ref={`input-${field.name}`}
                name={field.name}
                type={field.type}
                label={field.lib}
                errorField={this.state.errorField}
            />
        ))
    }

    render() {
        const { hasError, errorField, errorMessage } = this.state
        return (
            <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                {this.renderFields()}
                <Link to={configLogin.passwordPath}>
                    <div className="home-link">
                        Mot de passe oublié ?
                    </div>
                </Link>
                <div className="error-message">
                    {this.props.loginError || hasError
                        ? <FormattedMessage id={errorMessage} values={{ field: errorField }} />
                        : null
                    }
                </div>
                <button className="btn" type="submit">Valider</button>

            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
