import UserPassword from "./UserPassword";
import AuthUser from "./AuthUser";
import UserDatas from "./UserDatas";

const featuresList = [UserPassword, AuthUser, UserDatas];

export const featuresReducers = () => {
    const reducers = [];

    featuresList.map(feature => {
        reducers.push(feature.reducer);
    });

    return reducers;
};
