import React from "react";
import PropTypes from "prop-types";

import FormattedNumberAuto from "./FormattedNumberAuto";

/* eslint react/style-prop-object: 0 */

const Currency = ({ className, isEvolution, value, ...props }) => (
    <span className={className}>
        {isEvolution && value > 0 && <span>+</span>}
        <FormattedNumberAuto {...props} style="currency" currency="EUR" />
    </span>
);

Currency.propTypes = {
    value: PropTypes.number.isRequired,
    minimumFractionDigits: PropTypes.number,
    maximumFractionDigits: PropTypes.number,
    className: PropTypes.string,
    isEvolution: PropTypes.bool
};

Currency.defaultProps = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    isEvolution: false,
    className: ""
};

export default Currency;
