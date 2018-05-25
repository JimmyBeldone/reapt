import React, {PureComponent}  from 'react'
import PropTypes from 'prop-types'

import FormattedNumberWithPlaceholder from './FormattedNumberWithPlaceholder'

export default class Decimal extends PureComponent {

    static propTypes = {
        value: PropTypes.integer.isRequired,
        minimumFractionDigits: PropTypes.integer,
        maximumFractionDigits: PropTypes.integer,
        className: PropTypes.string,
        isEvolution: PropTypes.boolean
    }

    static defaultProps = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        isEvolution: false
    }

    render() {
        return (
            <span className={this.props.className}>
                {this.props.isEvolution && this.props.value > 0 && <span>+</span>}
                <FormattedNumberWithPlaceholder {...this.props} style="decimal" />
            </span>
        );
    }
}
