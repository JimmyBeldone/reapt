import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Decimal from './Decimal'
import FormattedNumberAuto from './FormattedNumberAuto'

export default class Average extends PureComponent {

    static propTypes = {
        value: PropTypes.number,
        formatedMoney: PropTypes.bool,
        minimumFractionDigits: PropTypes.number,
        maximumFractionDigits: PropTypes.number,
        roundToThousands: PropTypes.bool
    }

    static defaultProps = {
        value: 0,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        roundToThousands: false,
        formatedMoney: false
    }

    render() {
        let { value, formatedMoney } = this.props
        if (value === null) {
            return <FormattedNumberAuto {...this.props} style="currency" currency="EUR" />
        }
        if (this.props.roundToThousands) {
            if (formatedMoney) {
                let newValue = value / 1000
                return (
                    <span className="">
                        <Decimal {...this.props} value={newValue} />&nbsp;K€
                    </span>
                );
            }
            return <FormattedNumberAuto {...this.props} value={value} style="currency" currency="EUR" />
        }
        return <FormattedNumberAuto {...this.props} style="currency" currency="EUR" />
    }
}
