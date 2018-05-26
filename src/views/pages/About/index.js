import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { PAGE_ABOUT_ONE, PAGE_ABOUT_TWO } from '../../../constants/router'
import RouteWithSubRoutes from '../../../routes/RouteWithSubRoutes'
import AboutTemplate from './AboutTemplate'
import './About.styl'

class About extends Component {

    static propTypes = {
        routes: PropTypes.array
    }

    render() {
        const {routes} = this.props
        return (
            <div>
                <AboutTemplate />
                {/* Nested routes */}
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>
        )
    }
}

export default About
