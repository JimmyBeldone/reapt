import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

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
        errorField: PropTypes.string
    };

    static defaultProps = {
        type: "text",
        classNames: "",
        disabled: false,
        hidden: false,
        placeholder: "",
        errorField: ""
    };

    input = null;

    render() {
        console.log(this.props);
        // console.log(React.getKey());
        const {
            classNames,
            name,
            label,
            type,
            disabled,
            hidden,
            placeholder,
            errorField
        } = this.props;
        let errorClass = "";
        if (errorField !== null) {
            if (Array.isArray(errorField)) {
                errorClass = errorField.includes(label);
            } else {
                errorClass = errorField === label;
            }
        }
        return (
            <div
                className={cn("input-group", classNames, {
                    hidden,
                    error: errorClass
                })}
            >
                <label htmlFor={name}>{label}</label>
                <input
                    name={name}
                    lib={label}
                    className="form-control"
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    ref={el => {
                        this.input = el;
                    }}
                />
            </div>
        );
    }
}

export default InputGroup;
