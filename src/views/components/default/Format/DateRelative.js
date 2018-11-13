/* eslint-disable consistent-return */
import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const DateRelative = ({ className, value, relativeTo, relativeNow }) => (
    <div className={className}>
        {relativeNow
            ? relativeTo
                ? dayjs().fromNow()
                : dayjs().toNow()
            : relativeTo && value !== null
            ? dayjs().from(dayjs(value))
            : dayjs().to(dayjs(value))}
    </div>
);

DateRelative.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    relativeTo: PropTypes.bool,
    relativeNow: PropTypes.bool
};

DateRelative.defaultProps = {
    className: "",
    relativeTo: true,
    relativeNow: false
};

export default DateRelative;
