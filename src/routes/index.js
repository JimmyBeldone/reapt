import React, { lazy } from "react";

import HomePage from "../views/pages/HomePage";
import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_ABOUT_ONE,
    PAGE_ABOUT_TWO,
    PAGE_DASHBOARD,
    PAGE_LOGIN,
    PAGE_FORGOTTEN_PASSWORD
} from "../constants/router";
import {
    userIsAuthenticated,
    userIsNotAuthenticated
} from "../providers/AuthProvider";

const AboutOne = () => <h1>About One Page</h1>;
const AboutTwo = () => <h1>About Two Page</h1>;

// const HomePage = lazy(() => import('../views/pages/HomePage'));
const AboutPage = lazy(() => import("../views/pages/About"));
const DashboardPage = lazy(() => import("../views/pages/Dashboard"));
const NotFoundPage = lazy(() => import("../views/pages/NotFound"));
const LoginPage = lazy(() => import("../views/pages/Login"));
const ForgottenPwdPage = lazy(() =>
    import("../views/pages/ForgottenPasswordPage")
);

const routes = [
    {
        path: PAGE_HOME,
        component: userIsNotAuthenticated(HomePage),
        exact: true
    },
    {
        path: PAGE_DASHBOARD,
        component: userIsAuthenticated(DashboardPage),
        exact: true
    },
    {
        path: PAGE_LOGIN,
        component: userIsNotAuthenticated(LoginPage),
        exact: true
    },
    {
        path: PAGE_FORGOTTEN_PASSWORD,
        component: userIsNotAuthenticated(ForgottenPwdPage),
        exact: true
    },
    {
        path: PAGE_ABOUT,
        component: userIsNotAuthenticated(AboutPage),
        exact: false,
        routes: [
            {
                path: PAGE_ABOUT_ONE,
                component: AboutOne,
                exact: true
            },
            {
                path: PAGE_ABOUT_TWO,
                component: AboutTwo,
                exact: true
            }
        ]
    },
    {
        component: NotFoundPage
    }
];

export default routes;
