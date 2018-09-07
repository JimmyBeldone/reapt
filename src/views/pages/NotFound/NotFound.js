import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './index.styl'

class NotFound extends PureComponent {

    static propTypes = {

    }

    render() {
        return (
            <div id="notfound">
                <div className="error-code">404</div>
                <div className="error-message">Sorry, <br/>Page Not Found</div>
            </div>
        )
    }
}

export default NotFound
