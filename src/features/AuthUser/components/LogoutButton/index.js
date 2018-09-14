import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { push } from 'connected-react-router'
import cn from 'classnames'

import './Logoutbutton.styl'

import { logoutUser } from '../../actions'
import { configLogout } from '../../config'

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    redirectHome: () => dispatch(push(configLogout.homePath))
})

class LogoutButton extends PureComponent {

    static propTypes = {
        logoutUser: PropTypes.func.isRequired,
        redirectHome: PropTypes.func.isRequired,
        className: PropTypes.string.isRequired,
        lib: PropTypes.string
    }

    static defaultProps = {
        className: ''
    }

    handleLogout() {
        this.props.logoutUser()
        this.props.redirectHome()
    }

    render() {
        const { className, lib } = this.props
        const correctLib = lib !== undefined ? lib : configLogout.lib
        return (
            <div className={cn('LogoutButton', className)} onClick={this.handleLogout.bind(this)}>
                {configLogout.withIntl ? (
                    <FormattedMessage id={correctLib} />
                ) : correctLib}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(LogoutButton)
