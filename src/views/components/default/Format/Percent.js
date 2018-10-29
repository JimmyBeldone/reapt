import React, { memo } from "react";
import PropTypes from "prop-types";

import FormattedNumberAuto from "./FormattedNumberAuto";

/* eslint react/style-prop-object: 0 */

const Percent = memo(({ className, isEvolution, value, ...props }) => (
    <span className={className}>
        {isEvolution && value > 0 && <span>+</span>}
        <FormattedNumberAuto {...props} style="percent" />
    </span>
));

Percent.propTypes = {
    value: PropTypes.number.isRequired,
    minimumFractionDigits: PropTypes.number,
    maximumFractionDigits: PropTypes.number,
    isEvolution: PropTypes.bool,
    className: PropTypes.string
};

Percent.defaultProps = {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    isEvolution: false,
    className: ""
};

export default Percent;
