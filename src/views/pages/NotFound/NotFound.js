import React from 'react'
// import PropTypes from 'prop-types'

import './index.styl'

const NotFound = () => (<div id="notfound">
    <div className="error-code">404</div>
    <div className="error-message">Sorry,
        <br/>Page Not Found</div>
</div>)

NotFound.propTypes = {}

export default NotFound
