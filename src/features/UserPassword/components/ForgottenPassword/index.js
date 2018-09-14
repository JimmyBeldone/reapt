import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import './ForgottenPassword.styl'
import { PAGE_HOME } from '../../../../constants/router'
import { emailValidation } from '../../utils'
import { sendEmail as resetPasswordSendEmail } from '../../actions'

const mapDispatchToProps = dispatch => ({
    resetPasswordSendEmail: (email) => dispatch(resetPasswordSendEmail(email))
})

class ForgottenPassword extends PureComponent {

    static propTypes = {
        resetPasswordSendEmail: PropTypes.func.isRequired
    }

    state = {
        hasError: false,
        errorField: null
    }

    handleSubmit(e) {
        e.preventDefault()
        const email = this.refs.input

        if (email !== null) {
            let hasError = false
            let errorField = null
            let errorMessage = null

            const value = email.value.trim()

            if (value.length === 0) {
                hasError = true
                errorField = 'Email'
                errorMessage = 'errors.emptyField'
            } else {
                if (!emailValidation(value)) {
                    hasError = true
                    errorField = 'Email'
                    errorMessage = 'errors.invalidEmail'
                } else {
                    this.props.resetPasswordSendEmail(value)
                }
            }

            this.setState({ hasError: hasError, errorField: errorField, errorMessage: errorMessage })

        }
    }

    render() {
        const { hasError, errorField, errorMessage } = this.state
        return (
            <form className="forgotten-password" onSubmit={this.handleSubmit.bind(this)}>

                <div className="input-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input name="email" className="form-control" type="text" ref="input" />
                </div>

                <div className="error-message">
                    {hasError ? (
                        <FormattedMessage id={errorMessage} values={{ field: errorField }} />
                    ) : null}
                </div>

                <button className="btn" type="submit">Envoyer</button>

                <Link to={PAGE_HOME}>
                    <div className="home-link">
                        Revenir à l'accueil
                    </div>
                </Link>
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(ForgottenPassword)
