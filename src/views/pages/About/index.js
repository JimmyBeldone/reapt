import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import AboutTemplate from './AboutTemplate'
import './About.styl'

class About extends PureComponent {

    static propTypes = {

    }
    
    render() {
        return (<AboutTemplate />)
    }
}
    
export default About