import React from 'react'

import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_ABOUT_ONE,
    PAGE_ABOUT_TWO
    // PAGE_NOT_FOUND
} from '../constants/router'
// import {userIsAuthenticated, userIsNotAuthenticated} from '../providers/AuthProvider'
import HomePage from '../views/pages/HomePage'
// import LoginPage from '../views/pages/Login'
import About from '../views/pages/About'

const AboutOne = () => <h1>About One Page</h1>
const AboutTwo = () => <h1>About Two Page</h1>

// If website need Auth :
// const routes = [{
//     path: PAGE_HOME,
//     component: userIsAuthenticated(HomePage),
//     exact: true
// }, {
//     path: PAGE_LOGIN,
//     component: userIsNotAuthenticated(LoginPage),
//     exact: true,
//     public: true
// }]

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

export default routes
