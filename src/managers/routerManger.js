import { PAGE_HOME } from "../constants/router";

export function getParams(pageName) {
    let params;
    switch (pageName) {
        case PAGE_HOME:
            params = [];
    }
    return params;
}

export function getPath(
    routerStore = null,
    newPageName = null,
    newParams = {}
) {
    let currentPageName = null;
    let currentParams = {};
    if (routerStore !== null) {
        currentPageName = routerStore.pageName;
        currentParams = routerStore.match.params;
    }
    let pageName = PAGE_HOME;
    if (newPageName !== null) {
        pageName = newPageName;
    } else if (currentPageName !== null) {
        pageName = currentPageName;
    }
    let path = pageName;
    getParams(pageName).forEach(item => {
        path += "/";
        if (newParams.hasOwnProperty(item.name)) {
            path += newParams[item.name];
        } else if (currentParams.hasOwnProperty(item.name)) {
            path += currentParams[item.name];
        } else {
            path += item.default;
        }
    });

    return path;
}

export function generateRouteConfigPath(pageName) {
    let routeParams = pageName;
    getParams(pageName)
        .map(item => `/:${item.name}`)
        .forEach(item => {
            routeParams += item;
        });

    return routeParams;
}

export function getPageName(url) {
    const match = url.match(/^\/[^/]*/);
    if (match !== null) {
        return match[0];
    }

    return null;
}
