import React, { memo } from "react";
import PropTypes from "prop-types";
import { FormattedNumber } from "react-intl";
import { Trans } from "react-i18next";
import cn from "classnames";

const FormattedNumberAuto = memo(
    ({ value, withPlaceholder, className, ...props }) => {
        if (withPlaceholder && value === null) {
            return <span className={cn("placeholder", className)}>…</span>;
        }

        if (value === null || Number.isNaN(value)) {
            return (
                <span className={cn("number-na", className)}>
                    <Trans i18nKey="abbreviation.na" />
                </span>
            );
        }

        return <FormattedNumber {...props} />;
    }
);

FormattedNumberAuto.propTypes = {
    value: PropTypes.number.isRequired,
    style: PropTypes.string.isRequired,
    className: PropTypes.string,
    minimumFractionDigits: PropTypes.number,
    maximumFractionDigits: PropTypes.number,
    withPlaceholder: PropTypes.bool
};

FormattedNumberAuto.defaultProps = {
    withPlaceholder: false,
    className: "",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
};

export default FormattedNumberAuto;
