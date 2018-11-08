import UserPassword from "./UserPassword";
import AuthUser from "./UserAuth";
import UserData from "./UserData";

const featuresList = [UserPassword, AuthUser, UserData];

export const featuresReducers = () => {
    const reducers = [];

    featuresList.map(feature => {
        reducers.push(feature.reducer);
    });

    return reducers;
};
