import React, { memo } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const FormattedDate = memo(({ dateFormat, className, value }) => (
    <div className={className}>{dayjs(value).format(dateFormat)}</div>
));

FormattedDate.propTypes = {
    dateFormat: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string.isRequired
};

FormattedDate.defaultProps = {
    dateFormat: "DD MMMM YYYY",
    className: ""
};

export default FormattedDate;
