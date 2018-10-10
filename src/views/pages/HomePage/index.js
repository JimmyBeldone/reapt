import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import "./HomePage.styl";
import OpenModalBtn from "../../components/default/Modals/OpenModalBtn";
import DefaultModal from "../../components/default/Modals/DefaultModal";

const HomePage = (props, { intl }) => (
    <div id="homepage">
        <h1>Home Page</h1>
        <div className="message">
            {intl.formatMessage({ id: "home.hello" })}
            <br />
            <FormattedMessage id="home.content.test" />
            <br />
            <OpenModalBtn modal={DefaultModal}>
                <div>open modal</div>
            </OpenModalBtn>
        </div>
    </div>
);

HomePage.contextTypes = {
    intl: PropTypes.object.isRequired
};

export default HomePage;
