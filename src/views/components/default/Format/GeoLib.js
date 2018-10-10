import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

export default class GeoLib extends PureComponent {
    static propTypes = {
        lib: PropTypes.string.isRequired,
        tradKey: PropTypes.string.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        className: ""
    };

    formatLib() {
        const { lib, tradKey } = this.props;
        const split = lib.split("|");
        let newLib = "";
        let count = 0;
        split.forEach((geoLib, i) => {
            geoLib = geoLib.trim();
            if (i === 0) {
                newLib += geoLib;
            } else {
                count += 1;
            }
        });
        if (count > 0) {
            return (
                <span>
                    {newLib} +<br />
                    {count} <FormattedMessage id={tradKey} />
                </span>
            );
        }

        return lib;
    }

    render() {
        const { className } = this.props;
        return <span className={className}>{this.formatLib()}</span>;
    }
}
