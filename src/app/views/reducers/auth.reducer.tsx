import { AUTH_ACTION_TYPES } from "../actions/auth/auth.action-type";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTION_TYPES.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case AUTH_ACTION_TYPES.LOGIN_FAILURE:
            return {};
        case AUTH_ACTION_TYPES.LOGOUT:
            return {};
        default:
            return state
    }
}

export {
    AuthReducer
};