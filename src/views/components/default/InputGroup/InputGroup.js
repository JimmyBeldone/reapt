import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import { Field } from 'redux-form'

import './InputGroup.styl'

class InputGroup extends React.PureComponent {

    static propTypes = {
        errorMessage: PropTypes.func,
        title: PropTypes.string,
        label: PropTypes.string,
        component: PropTypes.string,
        type: PropTypes.string,
        classNames: PropTypes.string,
        form: PropTypes.string,
        value: PropTypes.string,
        disabled: PropTypes.bool,
        hidden: PropTypes.bool,
        autofocus: PropTypes.bool,
        placeholder: PropTypes.string,
        children: PropTypes.node,
        alwaysActive: PropTypes.bool,
        errorField: PropTypes.string
    }

    static defaultProps = {
        component: 'input',
        type: 'text',
        classNames: '',
        disabled: false,
        hidden: false,
        autofocus: false,
        placeholder: '',
        alwaysActive: false,
        errorField: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            active: this.isActive(),
            value: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            // value: nextProps.value,
            active: this.isActive(nextProps)
        })
    }

    isActive(nextProps = null) {
        let props = (nextProps !== null) ? nextProps : this.props
        return (props.value !== undefined && props.value !== null && props.value.length > 0) || props.autofocus || props.placeholder.length > 2 || props.alwaysActive
    }

    activeInput() {
        this.setState({ active: true })
    }

    getInputValue(e) {
        let value = e.currentTarget.value
        this.props.errorMessage.bind(this)
        if (value.length > 0) {
            if (value === this.state.value) {
                return
            }
            this.setState({ value: value })
        } else {
            if (this.props.alwaysActive) return
            this.setState({ active: false })
        }
    }

    feedInput(e) {
        this.props.errorMessage()
        let value = e.currentTarget.value
        this.setState({ value: value })
    }

    render() {
        const { classNames, title, label, component, type, value, disabled, hidden, autofocus, children, placeholder, errorField } = this.props
        if (type === 'checkbox') {
            return (
                <div
                    className={cn("input-group", "checkbox-bloc", {
                        error: errorField === title
                    })}
                >
                    <Field
                        id={title}
                        name={title}
                        component={"input"}
                        type={"checkbox"}
                        onChange={this.feedInput.bind(this)}
                     />
                    <label htmlFor={title}>
                        {label}
                    </label>
                </div>
            )
        }
        if (component === 'select') {
            return (
                <div className="input-group select">
                    <label htmlFor={title}>
                        {label}
                    </label>
                    <div className="custom-select">
                        <Field
                            name={title}
                            className="form-control"
                            component={component}
                            type={type}
                            placeholder={placeholder}
                            value={this.state.value}
                            onClick={this.activeInput.bind(this)}
                            onFocus={this.activeInput.bind(this)}
                            onBlur={this.getInputValue.bind(this)}
                            onChange={this.feedInput.bind(this)}
                            disabled={disabled}
                            autoFocus={autofocus}
                        >
                            {children}
                        </Field>
                        <div className="icon icon-carousel-arrow"></div>
                    </div>
                </div>
            )
        }
        let errorClass = ''
        if (errorField !== null) {
            if (Array.isArray(errorField)) {
                errorClass = errorField.includes(title)
            } else {
                errorClass = errorField === title
            }
        }
        return (
            <div
                className={cn("input-group", classNames, {
                    active: (this.state.active),
                    textarea: component === 'textarea',
                    hidden: hidden,
                    error: errorClass
                })}
            >
                <label htmlFor={title}>
                    {label}
                </label>
                <Field
                    name={title}
                    className="form-control"
                    component={component}
                    type={type}
                    placeholder={placeholder}
                    value={this.state.value}
                    onClick={this.activeInput.bind(this)}
                    onFocus={this.activeInput.bind(this)}
                    onBlur={this.getInputValue.bind(this)}
                    onChange={this.feedInput.bind(this)}
                    disabled={disabled}
                    autoFocus={autofocus}
                >
                    {(children !== undefined) ? children : null}
                </Field>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    if (state.form[ownProps.form] !== undefined) {
        let value = (state.form[ownProps.form].values !== undefined && state.form[ownProps.form].values[ownProps.title] !== undefined) ? state.form[ownProps.form].values[ownProps.title] : null
        return {
            value: value
        };
    } else {
        return {}
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(InputGroup);
