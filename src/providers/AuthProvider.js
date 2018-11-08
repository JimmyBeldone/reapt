import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import connectedAuthWrapper from "redux-auth-wrapper/connectedAuthWrapper";
import { routerActions } from "connected-react-router";

import { PAGE_LOGIN, PAGE_DASHBOARD } from "../constants/router";

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: PAGE_LOGIN,
    authenticatedSelector: state => state.auth.authenticated === true,
    wrapperDisplayName: "UserIsAuthenticated",
    redirectAction: routerActions.push(PAGE_LOGIN)
});

const locationHelper = locationHelperBuilder({});

export const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || PAGE_DASHBOARD,
    allowRedirectBack: false,
    authenticatedSelector: state => state.auth.authenticated === false,
    wrapperDisplayName: "UserIsNotAuthenticated"
});

export const visibleOnlyAuthenticated = connectedAuthWrapper({
    authenticatedSelector: state => state.auth.authenticated === true,
    wrapperDisplayName: "VisibleOnlyAuthenticated"
});
