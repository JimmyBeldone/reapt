// import 'babel-polyfill'
// import 'intl'
// import 'intl/locale-data/jsonp/fr.js'

// Loads vendors and global style
import './styles/global.styl'
// Loading fonts style sheet separately for webpack to load all files in dist folder
import './assets/fonts/fonts.styl'

import React from 'react'
import { render } from 'react-dom'
// import { highlightUpdates } from 'react-highlight-updates';

import configureStore, { history } from './store/configureStore'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'

// highlightUpdates();

const store = configureStore()
window.lang = 'fr'

render(
    <Root store={store} history={history} />,
    document.getElementById('app')
)

registerServiceWorker()
