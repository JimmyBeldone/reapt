import axios from 'axios';
import Config from 'Config';
import cookie from 'react-cookies';
import jwtDecode from 'jwt-decode'

// import { onRefreshToken, logoutUser } from '../actions/authActions'

const isExpired = (token) => {
    const currentTime = new Date();
    const expiresDate = new Date(token.exp * 1000);
    return currentTime > expiresDate;
}

const api = (isPublic = false, dispatch = null) => {
    const instance = axios.create({
        baseURL: Config.apiURL
    });

    const token = cookie.load('token')
    const refreshToken = cookie.load('refresh_token')

    instance.interceptors.request.use(config => {
        let newConfig = { ...config };

        if (token && !isPublic) {
            newConfig.headers.Authorization = `Bearer ${token}`;
        }

        // check if token is expired
        if (!isPublic && token && refreshToken && isExpired(jwtDecode(token)) && dispatch !== null) {
            newConfig.retry = true;

            // call refresh token
            // return dispatch(onRefreshToken(refreshToken))
            //     .then(response => {
            //         // update header with new token
            //         newConfig.headers.Authorization = `Bearer ${response.token}`;
            //
            //         return Promise.resolve(newConfig);
            //     }, () => dispatch(logoutUser()));
        }

        return newConfig;
    });

    return instance;
};

export default api;
