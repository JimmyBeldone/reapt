import React, { memo } from "react";
import PropTypes from "prop-types";
import numbro from "numbro";
import cn from "classnames";

const FormattedNumberAuto = memo(({ value, className, ...props }) => {
    if (value === null || Number.isNaN(value)) {
    }

    return <FormattedNumber {...props} />;
});

FormattedNumberAuto.propTypes = {
    value: PropTypes.number.isRequired,
    style: PropTypes.string.isRequired,
    className: PropTypes.string,
    validForceAverageValues: PropTypes.string.isRequired,
    average: PropTypes.bool.isRequired
};

FormattedNumberAuto.defaultProps = {
    className: "",
    validForceAverageValues: "thousand",
    average: false
};

export default FormattedNumberAuto;
