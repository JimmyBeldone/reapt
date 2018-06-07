import React from 'react'
import Loadable from 'react-loadable'

import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_ABOUT_ONE,
    PAGE_ABOUT_TWO,
    PAGE_NOT_FOUND
} from '../constants/router'
import LoadingPage from '../views/components/default/LoadingPage/LoadingPage'

const AboutOne = () => <h1>About One Page</h1>
const AboutTwo = () => <h1>About Two Page</h1>

const routesProd = [{
    path: PAGE_HOME,
    component: Loadable({
        loader: () => import('../views/pages/HomePage'),
        loading: LoadingPage
    }),
    exact: true
}, {
    path: PAGE_ABOUT,
    component: Loadable({
        loader: () => import('../views/pages/About'),
        loading: LoadingPage
    }),
    routes: [
        {
            path: PAGE_ABOUT_ONE,
            component: AboutOne
        }, {
            path: PAGE_ABOUT_TWO,
            component: AboutTwo
        }
    ]
}]

export default routesProd
