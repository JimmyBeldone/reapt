import React from 'react'
import {Link} from 'react-router-dom'

export default () => (
    <div id="main-nav">
        <Link to={'/'} >Home</Link>
        <Link to={'/test'} >Test</Link>        
    </div>
)
