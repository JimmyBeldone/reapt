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
import HomePage from '../views/pages/HomePage'
import About from '../views/pages/About'

const AboutOne = () => <h1>About One Page</h1>
const AboutTwo = () => <h1>About Two Page</h1>

const routes = [{
    path: PAGE_HOME,
    component: HomePage,
    exact: true
}, {
    path: PAGE_ABOUT,
    component: About,
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
console.log('route dev');

export default routes