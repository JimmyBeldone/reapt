import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedNumber, FormattedMessage } from 'react-intl'
import cn from 'classnames'

export default class FormattedNumberAuto extends PureComponent {

    static propTypes = {
        value: PropTypes.number,
        style: PropTypes.string.isRequired,
        className: PropTypes.string,
        minimumFractionDigits: PropTypes.number,
        maximumFractionDigits: PropTypes.number,
        withPlaceholder: PropTypes.bool
    }

    static defaultProps = {
        withPlaceholder: false
    }

    render() {
        const { value, withPlaceholder, className } = this.props;

        if (withPlaceholder && value === null) {
            return (
                <span className={cn('placeholder', className)}>
                    …
                </span>
            )
        }

        if (value === null || isNaN(value)) {
            return (
                <span className={cn('number-na', className)}>
                    <FormattedMessage id="abbreviation.na"/>
                </span>
            )
        }

        return (
            <FormattedNumber {...this.props} />
        )
    }
}
