import React from "react";
import PropTypes from "prop-types";

import Decimal from "./Decimal";
import FormattedNumberAuto from "./FormattedNumberAuto";

/* eslint react/style-prop-object: 0 */

const Average = ({ value, formatedMoney, roundToThousands, ...props }) => {
    if (value === null) {
        return (
            <FormattedNumberAuto {...props} style="currency" currency="EUR" />
        );
    }
    if (roundToThousands) {
        if (formatedMoney) {
            const newValue = value / 1000;
            return (
                <span className="">
                    <Decimal {...props} value={newValue} />
                    &nbsp;K€
                </span>
            );
        }
        return (
            <FormattedNumberAuto
                {...props}
                value={value}
                style="currency"
                currency="EUR"
            />
        );
    }
    return <FormattedNumberAuto {...props} style="currency" currency="EUR" />;
};

Average.propTypes = {
    value: PropTypes.number,
    formatedMoney: PropTypes.bool,
    minimumFractionDigits: PropTypes.number,
    maximumFractionDigits: PropTypes.number,
    roundToThousands: PropTypes.bool
};

Average.defaultProps = {
    value: 0,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    roundToThousands: false,
    formatedMoney: false
};

export default Average;
