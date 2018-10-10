import React from "react";
import Loadable from "react-loadable";

import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_ABOUT_ONE,
    PAGE_ABOUT_TWO
    // PAGE_NOT_FOUND,
} from "../constants/router";
import LoadingPage from "../views/components/default/LoadingPage/LoadingPage";
// import { userIsAuthenticated, userIsNotAuthenticated } from '../providers/AuthProvider'

const AboutOne = () => <h1>About One Page</h1>;
const AboutTwo = () => <h1>About Two Page</h1>;

const HomePage = Loadable({
    loader: () => import("../views/pages/HomePage"),
    loading: LoadingPage
});
const AboutPage = Loadable({
    loader: () => import("../views/pages/About"),
    loading: LoadingPage
});

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
