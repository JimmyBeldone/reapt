import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

import './HomePage.styl'
import OpenModalBtn from '../../components/default/Modals/OpenModalBtn'

class HomePage extends React.PureComponent {

    static propTypes = {

    }

    static contextTypes = {
        intl: PropTypes.object.isRequired
    }

    render() {
        return (
            <div id="homepage">
                <h1>Home Page</h1>
                <div className="message">
                    {this.context.intl.formatMessage({id: "home.hello"})}
                    <br/>
                    <FormattedMessage id="home.content.test" />
                    <br/>
                    <OpenModalBtn />
                </div>
            </div>
        )
    }
}

export default HomePage
