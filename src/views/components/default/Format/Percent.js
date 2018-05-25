import React, {PureComponent}  from 'react'
import PropTypes from 'prop-types'

import FormattedNumberWithPlaceholder from './FormattedNumberWithPlaceholder'

export default class Percent extends PureComponent {

    static propTypes = {
        value: PropTypes.integer.isRequired,
        minimumFractionDigits: PropTypes.integer,
        maximumFractionDigits: PropTypes.integer,
        isEvolution: PropTypes.boolean,
        className: PropTypes.string
    }

    static defaultProps = {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
        isEvolution: false
    }

    render() {
        return (
            <span className={this.props.className}>
                {this.props.isEvolution && this.props.value > 0 && <span>+</span>}
                <FormattedNumberWithPlaceholder {...this.props} style="percent" />
            </span>
        );
    }
}
