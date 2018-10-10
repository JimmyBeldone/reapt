import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_ABOUT_ONE,
    PAGE_ABOUT_TWO
} from "../constants/router";

const routesPath = [
    {
        path: PAGE_HOME,
        exact: true
    },
    {
        path: PAGE_ABOUT,
        exact: true
    },
    {
        path: PAGE_ABOUT_ONE,
        exact: true
    },
    {
        path: PAGE_ABOUT_TWO,
        exact: true
    }
];

export default routesPath;
