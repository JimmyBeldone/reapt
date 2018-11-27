import React, { memo } from "react";
import PropTypes from "prop-types";
import numbro from "numbro";

/* eslint react/style-prop-object: 0 */

const Decimal = memo(
    ({
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
        if (isPercent) {
            options.output = "percent";
            delete options.average;
        }
        const format = isCurrency
            ? numbro(value).formatCurrency(options)
            : numbro(value).format(options);
        return (
            <span className={className}>
                {value === null || Number.isNaN(value) ? "N/A" : format}
            </span>
        );
    }
);

Decimal.propTypes = {
    isPercent: PropTypes.bool,
    isCurrency: PropTypes.bool,
    value: PropTypes.number.isRequired,
    className: PropTypes.string,
    isEvolution: PropTypes.bool,
    fractionDigits: PropTypes.number.isRequired,
    average: PropTypes.bool.isRequired
};

Decimal.defaultProps = {
    isCurrency: false,
    isPercent: false,
    isEvolution: false,
    className: "",
    fractionDigits: 2,
    average: false
};

export default Decimal;
