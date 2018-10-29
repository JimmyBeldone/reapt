import React, { memo } from "react";
import PropTypes from "prop-types";
import { FormattedPlural } from "react-intl";

const FormattedPluralAuto = memo(({ id, value, ...props }, { intl }) => {
    const newValue = value === null ? 0 : value;

    return (
        <FormattedPlural
            {...props}
            value={newValue}
            one={intl.formatMessage({ id: `${id}.one` })}
            other={intl.formatMessage({ id: `${id}.other` })}
        />
    );
});

FormattedPluralAuto.contextTypes = {
    intl: PropTypes.object.isRequired
};

FormattedPluralAuto.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number
};

FormattedPluralAuto.defaultProps = {
    value: 0
};

export default FormattedPluralAuto;
