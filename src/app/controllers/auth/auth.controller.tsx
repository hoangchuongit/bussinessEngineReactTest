import { authRef } from '../../../config/firebase.config';
import IAuthentication from "./auth.interface";
import { success, error } from "../common.controller";

class Authentication implements IAuthentication {
    /**
     * Login system
     * @param email username signin
     * @param password password signin
     * @author Chuong.Hoang
     */
    public Login(email: string, password: string): Promise<any> {
        return authRef.signInWithEmailAndPassword(email, password)
            .then(success)
            .catch(error);
    }

    /**
     * Signup system
     * @param email username signup
     * @param password password signup
     * @author Chuong.Hoang
     */
    public Signup(email: string, password: string): Promise<any> {
        return authRef.createUserWithEmailAndPassword(email, password)
            .then(success)
            .catch(error);
    }

    /**
     * Signout system
     * @author Chuong.Hoang
     */
    public Signout(): Promise<any> {
        return authRef.signOut()
            .then(success)
            .catch(error);
    }
}

export default new Authentication();