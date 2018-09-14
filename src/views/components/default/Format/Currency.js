import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FormattedNumberAuto from './FormattedNumberAuto'

export default class Currency extends PureComponent {

    static propTypes = {
        value: PropTypes.number,
        minimumFractionDigits: PropTypes.number,
        maximumFractionDigits: PropTypes.number,
        className: PropTypes.string,
        isEvolution: PropTypes.bool
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
                <FormattedNumberAuto {...this.props} style="currency" currency="EUR" />
            </span>
        );
    }
}
