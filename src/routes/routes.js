import Loadable from 'react-loadable'

import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_NOT_FOUND
} from '../constants/router'
import LoadingPage from '../views/components/default/LoadingPage/LoadingPage'

const routes = [{
    component: Loadable({
        loader: () => import('../views/pages/HomePage/index'),
        modules: ['../views/pages/HomePage/index'],
        loading: LoadingPage
    }),
    path: PAGE_HOME,
    exact: true
}, {
    component: Loadable({
        loader: () => import('../views/pages/About/index'),
        modules: ['../views/pages/About/index'],
        loading: LoadingPage
    }),
    path: PAGE_ABOUT,
    exact: true
}]

export default routes
