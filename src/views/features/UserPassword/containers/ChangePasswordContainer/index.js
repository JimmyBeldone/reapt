import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";

import NewPasswordForm from "../../components/NewPasswordForm";
import { changePassword } from "../../actions";
import { configChangePassword } from "../../config";

const mapStateToProps = state => ({
    changeMessage: state.userPassword.changePassword.message,
    changeError: state.userPassword.changePassword.error
});

const mapDispatchToProps = dispatch => ({
    changePassword: (current, password) =>
        dispatch(changePassword(current, password))
});

class ChangePasswordContainer extends PureComponent {
    static propTypes = {
        changeMessage: PropTypes.string.isRequired,
        changeError: PropTypes.bool.isRequired,
        changePassword: PropTypes.func.isRequired
    };

    state = {
        hasError: false,
        errorField: "",
        errorMessage: ""
    };

    handleChange(fields) {
        const { changePassword } = this.props;
        const current = fields["input-current-password"].input;
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

        if (equals(password.value, current.value)) {
            errors.push({
                hasError: true,
                errorField: password.getAttribute("lib"),
                errorMessage: "errors.identical"
            });
        }

        if (!equals(password.value, confirm.value)) {
            errors.push({
                hasError: true,
                errorField: confirm.getAttribute("lib"),
                errorMessage: "errors.notIdentical"
            });
        }

        if (errors.length !== 0) {
            this.setState(errors[0]);
        } else {
            this.setState({
                hasError: false,
                errorField: "",
                errorMessage: ""
            });
            changePassword(current.value.trim(), password.value.trim());
        }
    }

    render() {
        const { hasError, errorField, errorMessage } = this.state;
        const { changeMessage, changeError } = this.props;
        return (
            <div className="change-password-container">
                <NewPasswordForm
                    handleAction={this.handleChange.bind(this)}
                    hasError={hasError}
                    errorField={errorField}
                    errorMessage={errorMessage}
                    actionMessage={changeMessage}
                    actionError={changeError}
                    isPublic={false}
                    fields={configChangePassword.fields}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangePasswordContainer);
