import React, { memo } from "react";
import PropTypes from "prop-types";

import FormattedNumberAuto from "./FormattedNumberAuto";

/* eslint react/style-prop-object: 0 */

const Decimal = memo(({ className, isEvolution, value, ...props }) => (
    <span className={className}>
        {isEvolution && value > 0 && <span>+</span>}
        <FormattedNumberAuto {...props} style="decimal" />
    </span>
));

Decimal.propTypes = {
    value: PropTypes.number.isRequired,
    minimumFractionDigits: PropTypes.number,
    maximumFractionDigits: PropTypes.number,
    className: PropTypes.string,
    isEvolution: PropTypes.bool
};

Decimal.defaultProps = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    isEvolution: false,
    className: ""
};

export default Decimal;
