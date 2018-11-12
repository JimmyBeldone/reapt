import React, { memo } from "react";
import PropTypes from "prop-types";
import numbro from "numbro";

/* eslint react/style-prop-object: 0 */

const Decimal = memo(
    ({ className, isEvolution, value, fractionDigits, average }) => (
        <span className={className}>
            {value === null || Number.isNaN(value)
                ? "N/A"
                : numbro(value).format({
                      mantissa: fractionDigits,
                      forceSign: isEvolution && value > 0,
                      thousandSeparated: true,
                      spaceSeparated: false,
                      optionalMantissa: true,
                      average
                  })}
        </span>
    )
);

Decimal.propTypes = {
    value: PropTypes.number.isRequired,
    className: PropTypes.string,
    isEvolution: PropTypes.bool,
    fractionDigits: PropTypes.number.isRequired,
    average: PropTypes.bool.isRequired
};

Decimal.defaultProps = {
    isEvolution: false,
    className: "",
    fractionDigits: 2,
    average: false
};

export default Decimal;
