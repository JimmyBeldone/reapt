import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import './NewPasswordForm.styl'

import { PAGE_HOME } from '../../../../constants/router'

class NewPasswordForm extends PureComponent {

    static propTypes = {
        handleAction: PropTypes.func.isRequired,
        hasError: PropTypes.bool.isRequired,
        errorField: PropTypes.string.isRequired,
        errorMessage: PropTypes.string.isRequired,
        actionMessage: PropTypes.string.isRequired,
        actionError: PropTypes.bool.isRequired,
        isPublic: PropTypes.bool.isRequired,
        fields: PropTypes.array.isRequired
    }

    static defaultProps = {
        isPublic: true
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleAction(this.refs)
    }

    renderFields() {
        const { fields } = this.props
        return fields.map(field => (<div key={`new-password-input-${field.name}`} className="input-group">
            <label htmlFor={field.name}>
                {field.lib}
            </label>
            <input name={field.name} lib={field.lib} className="form-control" type={field.type} ref={`input-${field.name}`}/>
        </div>))
    }

    render() {
        const {
            hasError,
            errorField,
            errorMessage,
            actionMessage,
            actionError,
            isPublic
        } = this.props
        return (<form className="new-password-form" onSubmit={this.handleSubmit.bind(this)}>
            {this.renderFields()}
            <div className="error-message">
                {
                    hasError
                        ? (<FormattedMessage id={errorMessage} values={{
                                field: errorField
                            }}/>)
                        : null
                }
            </div>

            <button className="btn" type="submit">Modifier</button>

            {
                isPublic
                    ? (<Link to={PAGE_HOME}>
                        <div className="home-link">
                            Revenir à l'accueil
                        </div>
                    </Link>)
                    : null
            }

            <div className={cn("action-message", { hasError: actionError })}>
                {actionMessage}
            </div>
        </form>)
    }
}

export default NewPasswordForm
