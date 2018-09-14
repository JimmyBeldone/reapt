import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FormattedNumberAuto from './FormattedNumberAuto'

export default class Percent extends PureComponent {

    static propTypes = {
        value: PropTypes.number,
        minimumFractionDigits: PropTypes.number,
        maximumFractionDigits: PropTypes.number,
        isEvolution: PropTypes.bool,
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
                <FormattedNumberAuto {...this.props} style="percent" />
            </span>
        );
    }
}
