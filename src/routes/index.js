import React, { lazy } from "react";

import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_ABOUT_ONE,
    PAGE_ABOUT_TWO
    // PAGE_NOT_FOUND,
} from "../constants/router";
// import { userIsAuthenticated, userIsNotAuthenticated } from '../providers/AuthProvider'

const AboutOne = () => <h1>About One Page</h1>;
const AboutTwo = () => <h1>About Two Page</h1>;

const HomePage = lazy(() => import("../views/pages/HomePage"));
const AboutPage = lazy(() => import("../views/pages/About"));

const routes = [
    {
        path: PAGE_HOME,
        component: HomePage,
        exact: true
    },
    {
        path: PAGE_ABOUT,
        component: AboutPage,
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
    }
];

export default routes;
