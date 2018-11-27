import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";

import NewPasswordForm from "../../components/NewPasswordForm";
import { resetPassword } from "../../actions";
import { configResetPassword } from "../../config";

const mapStateToProps = state => ({
    resetMessage: state.userPassword.resetPassword.message,
    resetError: state.userPassword.resetPassword.error
});

const mapDispatchToProps = dispatch => ({
    resetPassword: (token, password) => dispatch(resetPassword(token, password))
});

class ResettingPasswordContainer extends PureComponent {
    static propTypes = {
        token: PropTypes.string.isRequired,
        resetPassword: PropTypes.func.isRequired,
        resetMessage: PropTypes.string.isRequired,
        resetError: PropTypes.bool.isRequired
    };

    state = {
        hasError: false,
        errorField: "",
        errorMessage: ""
    };

    handleReset(fields) {
        const { token, resetPassword } = this.props;

        const password = fields["input-password"].input;
        const confirm = fields["input-password-confirm"].input;

        const errors = [];

        Object.values(fields).filter(field => {
            const { value } = field.input;
            if (isEmpty(value)) {
                errors.push({
                    hasError: true,
                    errorField: field.input.getAttribute("lib"),
                    errorMessage: "errors.emptyField"
                });
            }
        });

        if (!equals(password.value, confirm.value)) {
            errors.push({
                hasError: true,
                errorField: confirm.getAttribute("lib"),
                errorMessage: "errors.notIdentical"
            });
        }

        if (errors.length !== 0) {
            this.setState(errors[0]);
            // eslint-disable-next-line security/detect-possible-timing-attacks
        } else if (token !== undefined) {
            this.setState({
                hasError: false,
                errorField: "",
                errorMessage: ""
            });
            resetPassword(token, password.value.trim());
        }
    }

    render() {
        const { hasError, errorField, errorMessage } = this.state;
        const { resetMessage, resetError } = this.props;
        return (
            <div className="reset-password-container">
                <NewPasswordForm
                    handleAction={this.handleReset.bind(this)}
                    hasError={hasError}
                    errorField={errorField}
                    errorMessage={errorMessage}
                    actionMessage={resetMessage}
                    actionError={resetError}
                    fields={configResetPassword.fields}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResettingPasswordContainer);
