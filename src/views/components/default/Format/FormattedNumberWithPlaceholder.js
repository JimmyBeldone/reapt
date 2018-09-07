import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedNumber, FormattedMessage } from 'react-intl'

export default class FormattedNumberWithPlaceholder extends PureComponent {

    static propTypes = {
        value: PropTypes.integer.isRequired,
        style: PropTypes.string.isRequired,
        minimumFractionDigits: PropTypes.integer,
        maximumFractionDigits: PropTypes.integer
    }

    render() {
        if (this.props.value === null) {
            return (
                <span className="placeholder">...</span>
            )
        }

        if (isNaN(this.props.value)) {
            return (
                <FormattedMessage id={this.props.value} />
            )
        }

        return (
            <FormattedNumber {...this.props} />
        )
    }
}
