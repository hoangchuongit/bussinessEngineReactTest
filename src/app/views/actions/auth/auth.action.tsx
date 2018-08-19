import { history } from "configure-store";
import { StorageItem } from "enum";
import { RoutesConst } from "../../../constants";
import { AUTH_ACTION_TYPES, LOGIN_ACTION } from "./auth.action-type";
import { AuthController, ClientsController } from "controllers";

const SetUid = (uid: string): LOGIN_ACTION => {
    return {
        type: AUTH_ACTION_TYPES.SET_UID,
        uid
    };
};

const loginAction = (email: string, password: string) => {
    return dispatch => {
        AuthController.Login(email, password)
            .then(res => {
                if (res && res.user && res.user.uid) {
                    dispatch(SetUid(res.user.uid));
                    sessionStorage.setItem(StorageItem.USER_NAME, email);
                    sessionStorage.setItem(StorageItem.UID, res.user.uid);
                    sessionStorage.setItem(StorageItem.REFRESH_TOKEN, res.user.refreshToken);
                    history.push(RoutesConst.HOME);
                } else {
                    history.push(RoutesConst.SIGNIN);
                }
                console.log(res);
            });
    };
}

const logoutAction = () => {
    return dispatch => {
        AuthController.Signout().then(() => {
            dispatch(SetUid(null));
            sessionStorage.removeItem(StorageItem.USER_NAME);
            sessionStorage.removeItem(StorageItem.UID);
            sessionStorage.removeItem(StorageItem.REFRESH_TOKEN);
            history.push(RoutesConst.SIGNIN);
        });
    }
}

const signupAction = (email: string, password: string, fullname: string, address: string) => {
    return dispatch => {
        AuthController.Signup(email, password).then(res => {
            if (res && res.user && res.user.uid) {
                
                dispatch(SetUid(res.user.uid));
                
                sessionStorage.setItem(StorageItem.USER_NAME, email);
                sessionStorage.setItem(StorageItem.UID, res.user.uid);
                sessionStorage.setItem(StorageItem.REFRESH_TOKEN, res.user.refreshToken);
                
                ClientsController.CreateUser(res.user.uid, email, fullname, address).then(() => {
                    history.push(RoutesConst.HOME);
                });
            } else {
                history.push(RoutesConst.SIGNUP);
            }
        });
    };
}

export default {
    loginAction,
    logoutAction,
    signupAction
};