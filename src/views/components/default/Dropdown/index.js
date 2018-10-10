import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Dropdown.styl";

class Dropdown extends PureComponent {
    static propTypes = {
        dropdownTrigger: PropTypes.node.isRequired,
        dropdownContent: PropTypes.node.isRequired,
        buttonHeight: PropTypes.number,
        elemHeight: PropTypes.number,
        dropdownContentClassName: PropTypes.string,
        elemClassName: PropTypes.string
    };

    static defaultProps = {
        buttonHeight: 40,
        elemHeight: 40,
        dropdownContentClassName: "",
        elemClassName: ""
    };

    constructor(props) {
        super(props);
        this.state = {
            isActiveMenu: false
        };
        this.mounted = false;
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ isActiveMenu: true }, () => {
            document.addEventListener("click", this.hideMenu);
        });
    }

    hideMenu() {
        if (this.mounted) {
            this.setState({ isActiveMenu: false }, () => {
                document.removeEventListener("click", this.hideMenu);
            });
        }
        // if (!this.refs.dropdownContent.contains(e.target)) {
        //     this.setState({isActiveMenu: false}, () => {
        //         document.removeEventListener('click', this.hideMenu)
        //     })
        // }
    }

    renderContent() {
        const { elemClassName, dropdownContent, elemHeight } = this.props;
        return dropdownContent.map((elem, i) => (
            <div
                key={`dropdown-content-elem-${i}`}
                className={cn("dropdown-content-elem", elemClassName)}
                style={{ height: elemHeight }}
            >
                {elem}
            </div>
        ));
    }

    render() {
        const {
            dropdownTrigger,
            buttonHeight,
            dropdownContentClassName
        } = this.props;
        const { isActiveMenu } = this.state;
        return (
            <div className="dropdown-menu">
                <button
                    type="button"
                    className="dropdown-trigger"
                    onClick={this.showMenu.bind(this)}
                    style={{ height: buttonHeight }}
                >
                    {dropdownTrigger}
                </button>
                <div
                    className={cn(
                        "dropdown-content",
                        dropdownContentClassName,
                        { hidden: !isActiveMenu }
                    )}
                    // ref="dropdownContent"
                >
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default Dropdown;
