import React from "react";
import { Trans } from "react-i18next";

import "./HomePage.styl";
import OpenModalBtn from "../../components/default/Modals/OpenModalBtn";
import DefaultModal from "../../components/default/Modals/DefaultModal";

const HomePage = () => (
    <div id="homepage">
        <h1>Home Page</h1>
        <div className="message">
            <Trans i18nKey="home.content.test" />
            <br />
            <OpenModalBtn modal={DefaultModal}>
                <div>open modal</div>
            </OpenModalBtn>
        </div>
    </div>
);

export default HomePage;
