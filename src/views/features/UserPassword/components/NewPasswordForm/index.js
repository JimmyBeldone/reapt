import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import cn from "classnames";

import "./NewPasswordForm.styl";

import InputGroup from "../../../../views/components/default/InputGroup/InputGroup";
import { PAGE_HOME } from "../../../../constants/router";

/* eslint react/no-string-refs: 0 */

class NewPasswordForm extends PureComponent {
    static propTypes = {
        handleAction: PropTypes.func.isRequired,
        hasError: PropTypes.bool.isRequired,
        errorField: PropTypes.string.isRequired,
        errorMessage: PropTypes.string.isRequired,
        actionMessage: PropTypes.string.isRequired,
        actionError: PropTypes.bool.isRequired,
        isPublic: PropTypes.bool,
        fields: PropTypes.array.isRequired
    };

    static defaultProps = {
        isPublic: true
    };

    handleSubmit(e) {
        e.preventDefault();
        const { handleAction } = this.props;
        handleAction(this.refs);
    }

    renderFields() {
        const { errorField, fields } = this.props;
        return fields.map(field => (
            <InputGroup
                key={`new-password-input-${field.name}`}
                ref={`input-${field.name}`}
                name={field.name}
                type={field.type}
                label={field.lib}
                errorField={errorField}
            />
        ));
    }

    render() {
        const {
            hasError,
            errorField,
            errorMessage,
            actionMessage,
            actionError,
            isPublic
        } = this.props;
        return (
            <form
                className="new-password-form"
                onSubmit={this.handleSubmit.bind(this)}
            >
                {this.renderFields()}

                {isPublic ? (
                    <Link to={PAGE_HOME}>
                        <div className="home-link">
                            Revenir à l&apos;accueil
                        </div>
                    </Link>
                ) : null}

                <div className="error-message">
                    {hasError ? (
                        <FormattedMessage
                            id={errorMessage}
                            values={{ field: errorField }}
                        />
                    ) : null}
                </div>

                <button className="btn" type="submit">
                    Modifier
                </button>

                <div
                    className={cn("action-message", { hasError: actionError })}
                >
                    {actionMessage}
                </div>
            </form>
        );
    }
}

export default NewPasswordForm;
