import React, { memo } from "react";

import "./NotFound.styl";

const NotFound = memo(() => (
    <div id="notfound">
        <div className="error-code">404</div>
        <div className="error-message">
            Sorry,
            <br />
            Page Not Found
        </div>
    </div>
));

export default NotFound;
