import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cn from "classnames";

const mapStateToProps = (state, ownProps) => ({
    userParam: state.user.datas.hasOwnProperty(ownProps.param)
        ? state.user.datas[ownProps.param]
        : null
});

const GetUserParam = ({ className, param, userParam }) => {
    if (userParam === null) {
        console.log(`le paramètre "${param}" n'existe pas dans l'objet user`);
        return null;
    }
    return <div className={cn("user-param", className)}>{userParam}</div>;
};

GetUserParam.propTypes = {
    param: PropTypes.string.isRequired,
    userParam: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    className: PropTypes.string
};

GetUserParam.defaultProps = {
    className: "",
    userParam: null
};

export default connect(mapStateToProps)(GetUserParam);
