import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'

import './HomePage.styl'

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
                    <FormattedMessage
                        id="home.hello"
                    />
                    <br/>
                    <FormattedMessage
                        id="home.content.test"
                    />
                </div>
                <div>
                    {this.context.intl.formatMessage({id: "home.hello"})}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
