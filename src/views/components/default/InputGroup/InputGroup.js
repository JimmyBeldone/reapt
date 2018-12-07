import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Trans, NamespacesConsumer } from "react-i18next";

// import './InputGroup.styl'

class InputGroup extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        classNames: PropTypes.string,
        disabled: PropTypes.bool,
        hidden: PropTypes.bool,
        placeholder: PropTypes.string,
        errorField: PropTypes.string,
        withIntl: PropTypes.bool
    };

    static defaultProps = {
        type: "text",
        classNames: "",
        disabled: false,
        hidden: false,
        placeholder: "",
        errorField: "",
        withIntl: true
    };

    input = null;

    render() {
        const {
            classNames,
            name,
            label,
            type,
            disabled,
            hidden,
            placeholder,
            errorField,
            withIntl
        } = this.props;
        let errorClass = "";
        if (errorField !== null) {
            errorClass = errorField === label;
        }
        return (
            <NamespacesConsumer>
                {t => (
                    <div
                        className={cn("input-group", classNames, {
                            hidden,
                            error: errorClass
                        })}
                    >
                        <label htmlFor={name}>
                            {withIntl ? <Trans i18nKey={label} /> : label}
                        </label>
                        <input
                            name={name}
                            lib={label}
                            className="form-control"
                            type={type}
                            placeholder={
                                withIntl ? t(placeholder) : placeholder
                            }
                            disabled={disabled}
                            ref={el => {
                                this.input = el;
                            }}
                        />
                    </div>
                )}
            </NamespacesConsumer>
        );
    }
}

export default InputGroup;
