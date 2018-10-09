import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RCTooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

import './tooltip.styl'

const align = {
    offset: [0, 7]
}

const Tooltip = ({placement, content, id, trigger, children}) => (
    <RCTooltip
        placement={placement}
        overlay={content}
        trigger={trigger}
        align={align}
    >
        {children}
    </RCTooltip>
)

Tooltip.propTypes = {
    placement: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    id: PropTypes.string,
    trigger: PropTypes.array.isRequired
}

Tooltip.defaultProps = {
    trigger: ['hover']
}

export default Tooltip
