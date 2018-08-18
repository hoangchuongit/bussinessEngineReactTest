import { AUTH_ACTION_TYPES } from "./auth.action-type";
import { AuthController } from "../../../controllers";
import { history } from '../../../configure-store';

const loginAction = (email: string, password: string) => {
    return dispatch => {
        dispatch(request({ email }));

        AuthController.Login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: AUTH_ACTION_TYPES.LOGIN_REQUEST, user } }
    function success(user) { return { type: AUTH_ACTION_TYPES.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: AUTH_ACTION_TYPES.LOGIN_FAILURE, error } }
}

const logoutAction = () => {
    AuthController.Signout();
    return { type: AUTH_ACTION_TYPES.LOGOUT };
}

const signupAction = (email: string, password: string) => {
    return dispatch => {
        dispatch(request(email));

        AuthController.Signup(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: AUTH_ACTION_TYPES.REGISTER_REQUEST, user } }
    function success(user) { return { type: AUTH_ACTION_TYPES.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: AUTH_ACTION_TYPES.REGISTER_FAILURE, error } }
}

export default {
    loginAction,
    logoutAction,
    signupAction
};