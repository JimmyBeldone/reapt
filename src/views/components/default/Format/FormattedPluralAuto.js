import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedPlural } from 'react-intl'

export default class FormattedPluralAuto extends PureComponent {

    static contextTypes = {
        intl: PropTypes.object.isRequired
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.number
    };

    static defaultProps = {
        value: 0
    }

    render() {
        const { id } = this.props;
        let { value } = this.props;

        if (value === null) {
            value = 0;
        }

        return (
            <FormattedPlural {...this.props} value={value}
                             one={this.context.intl.formatMessage({ id: `${id}.one` })}
                             other={this.context.intl.formatMessage({ id: `${id}.other` })}/>
        );
    }
}
