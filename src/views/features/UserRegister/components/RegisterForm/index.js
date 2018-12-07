import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Trans, NamespacesConsumer } from "react-i18next";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";

import { configRegister } from "../../config";
import InputGroup from "../../../../components/default/InputGroup/InputGroup";
import { registerUser } from "../../actions";

const mapStateToProps = state => ({
    registerError: state.errors
});

const mapDispatchToProps = dispatch => ({
    registerUser: UserData => dispatch(registerUser(UserData))
});

class RegisterForm extends Component {
    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        registerError: PropTypes.object.isRequired
    };

    state = { hasError: false, errorField: "", errorMessage: "" };

    handleSubmit(e) {
        e.preventDefault();
        const { registerUser } = this.props;
        // eslint-disable-next-line react/no-string-refs
        const fields = this.refs;
        const errors = [];

        const name = fields["input-username"].input;
        const email = fields["input-email"].input;
        const password = fields["input-password"].input;
        const passwordConfirm = fields["input-passwordConfirm"].input;

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

        if (!isEmail(email.value)) {
            errors.push({
                hasError: true,
                errorField: email.getAttribute("lib"),
                errorMessage: "errors.invalidEmail"
            });
        }

        if (!equals(password.value, passwordConfirm.value)) {
            errors.push({
                hasError: true,
                errorField: passwordConfirm.getAttribute("lib"),
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
            const UserData = {
                name: name.value.trim(),
                email: email.value.trim(),
                password: password.value.trim()
            };
            registerUser(UserData);
        }
    }

    renderFields() {
        const { errorField } = this.state;
        return configRegister.fields.map(field => (
            <InputGroup
                key={`register-input-${field.name}`}
                ref={`input-${field.name}`}
                name={field.name}
                type={field.type}
                label={field.lib}
                errorField={errorField}
                withIntl
            />
        ));
    }

    render() {
        const { hasError, errorField, errorMessage } = this.state;
        const { registerError } = this.props;
        return (
            <form noValidate onSubmit={this.handleSubmit.bind(this)}>
                {this.renderFields()}
                <div className="error-message">
                    {registerError || hasError ? (
                        <NamespacesConsumer>
                            {t => (
                                <Trans
                                    i18nKey={errorMessage}
                                    values={{ field: t(errorField) }}
                                />
                            )}
                        </NamespacesConsumer>
                    ) : null}
                </div>
                <button className="btn" type="submit">
                    <Trans i18nKey={configRegister.formBtn} />
                </button>
                <div className="login-link">
                    <Trans i18nKey={configRegister.link.text} />
                    <br />
                    <Link to={configRegister.loginPath}>
                        <Trans i18nKey={configRegister.link.button} />
                    </Link>
                </div>
            </form>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);
