import React from "react";
import PropTypes from "prop-types";
import numbro from "numbro";
import { nonNegativeNumber } from "airbnb-prop-types";

/* eslint react/style-prop-object: 0 */

const Decimal = ({
    className,
    isEvolution,
    value,
    fractionDigits,
    average,
    isCurrency,
    isPercent
}) => {
    const options = {
        mantissa: fractionDigits,
        forceSign: isEvolution && value > 0,
        thousandSeparated: true,
        spaceSeparated: false,
        optionalMantissa: true,
        average
    };
    if (isPercent && !isCurrency) {
        options.output = "percent";
        delete options.average;
    }
    const format = isCurrency =>
        isCurrency
            ? numbro(value).formatCurrency(options)
            : numbro(value).format(options);
    return (
        <span className={className}>
            {value === null || Number.isNaN(value) ? "N/A" : format(isCurrency)}
        </span>
    );
};

Decimal.propTypes = {
    isCurrency: PropTypes.bool,
    isPercent: PropTypes.bool,
    isEvolution: PropTypes.bool,
    className: PropTypes.string,
    fractionDigits: nonNegativeNumber(),
    average: PropTypes.bool,
    value: PropTypes.number
};

Decimal.defaultProps = {
    isCurrency: false,
    isPercent: false,
    isEvolution: false,
    className: "",
    fractionDigits: 2,
    average: false,
    value: null
};

export default Decimal;
