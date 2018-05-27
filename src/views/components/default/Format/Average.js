import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import Decimal from './Decimal'
import FormattedNumberWithPlaceholder from './FormattedNumberWithPlaceholder'

export default class Average extends PureComponent {

    static propTypes = {
        value: PropTypes.integer.isRequired,
        formatedMoney: PropTypes.bool,
        minimumFractionDigits: PropTypes.integer,
        maximumFractionDigits: PropTypes.integer,
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
        let value = this.props.value
        let formatedMoney = this.props.formatedMoney
        if (value === null) {
            return <FormattedNumberWithPlaceholder {...this.props} style="currency" currency="EUR" />
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
            return <FormattedNumberWithPlaceholder {...this.props} value={value} style="currency" currency="EUR" />
        }
        return <FormattedNumberWithPlaceholder {...this.props} style="currency" currency="EUR" />
    }
}
