import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'

import NavTemplate from './NavTemplate'

class Nav extends PureComponent {

    static propTypes = {}

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    render() {
        if (this.state.hasError) {
            return <div>Une erreur est survenue</div>
        }
        return <NavTemplate/>
    }
}

export default Nav
