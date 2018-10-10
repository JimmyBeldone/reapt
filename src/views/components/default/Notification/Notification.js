import React from "react";
import { NotificationStack } from "react-notification";
import { OrderedSet } from "immutable";

import Trans from "../Format/Trans";

export default class Notifications extends React.PureComponent {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            notifications: OrderedSet(),
            count: 0
        };
        this.removeNotification = this.removeNotification.bind(this);
    }

    addNotification(notif) {
        const { count, notifications } = this.state;
        const newCount = count + 1;
        return this.setState({
            count: newCount,
            notifications: notifications.add({
                message: <Trans k={notif.message} />,
                key: newCount,
                dismissAfter: notif.dismissAfter,
                onClick: () => this.removeNotification(newCount),
                color: notif.color
            })
        });
    }

    removeNotification(id) {
        const { notifications } = this.state;
        this.setState({
            notifications: notifications.filter(n => n.key !== id)
        });
    }

    render() {
        const { notifications } = this.state;
        notifications.toArray();
        if (notifications.length > 0) {
            return (
                <NotificationStack
                    notifications={notifications}
                    onDismiss={notification => {
                        this.setState(state => ({
                            notifications: state.notifications.delete(
                                notification
                            )
                        }));
                    }}
                    barStyleFactory={(index, style) => ({
                        ...style,
                        right: "auto",
                        left: "-100%",
                        bottom: `${4 + index * 4}rem`,
                        top: `auto`
                    })}
                    activeBarStyleFactory={(index, style) => ({
                        ...style,
                        top: `auto`,
                        right: "auto",
                        left: "1rem",
                        bottom: `${4 + index * 4}rem`
                    })}
                />
            );
        }
        return null;
    }
}
