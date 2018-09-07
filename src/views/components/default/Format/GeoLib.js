import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

export default class GeoLib extends PureComponent {

    static propTypes = {
        lib: PropTypes.string.isRequired,
        tradKey: PropTypes.string.isRequired,
        className: PropTypes.string
    }

    static defaultProps = {
        className: ''
    }

    formatLib() {
        const split = this.props.lib.split('|')
        let lib = ''
        let count = 0
        split.forEach((geoLib, i) => {
            geoLib = geoLib.trim()
            if (i === 0) {
                lib += geoLib
            } else {
                count++
            }
        })
        if (count > 0) {
            return (
                <span>
                    {lib} + <br />
                    {count} <FormattedMessage id={this.props.tradKey} />
                </span>
            )
        }

        return this.props.lib
    }

    render() {
        return (
            <span className={this.props.className}>
                {this.formatLib()}
            </span>
        );
    }
}
