
import React from 'react'
import { Link } from 'react-router-dom'

import { PAGE_ABOUT_ONE, PAGE_ABOUT_TWO } from '../../../constants/router'

const AboutTemplate = () => (
    <div className="about">
        <Link to={PAGE_ABOUT_ONE} >One</Link>
        <Link to={PAGE_ABOUT_TWO} >Two</Link>
    </div>
)

export default AboutTemplate
