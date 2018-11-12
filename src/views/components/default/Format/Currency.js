import React, { memo } from "react";
import PropTypes from "prop-types";
import numbro from "numbro";

/* eslint react/style-prop-object: 0 */

const Currency = memo(
    ({ className, isEvolution, value, fractionDigits, average }) => (
        <span className={className}>
            {value === null || Number.isNaN(value)
                ? "N/A"
                : numbro(value).formatCurrency({
                      mantissa: fractionDigits,
                      forceSign: isEvolution && value > 0,
                      average,
                      thousandSeparated: true,
                      spaceSeparated: true,
                      optionalMantissa: true
                  })}
        </span>
    )
);

Currency.propTypes = {
    value: PropTypes.number.isRequired,
    className: PropTypes.string,
    isEvolution: PropTypes.bool,
    fractionDigits: PropTypes.number.isRequired,
    average: PropTypes.bool.isRequired
};

Currency.defaultProps = {
    isEvolution: false,
    className: "",
    fractionDigits: 2,
    average: false
};

export default Currency;
