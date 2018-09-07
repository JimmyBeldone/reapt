// Loads vendors and global style
import './styles/global.styl'
// Loading fonts style sheet separately for webpack to load all files in dist folder
import './assets/fonts/fonts.styl'

import React from 'react'
import { render } from 'react-dom'

import configureStore, { history } from './store/configureStore'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()
window.lang = 'fr'

render(
    <Root store={store} history={history} />,
    document.getElementById('app')
)

registerServiceWorker()
