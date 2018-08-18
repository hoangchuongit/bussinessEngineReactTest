export default interface IAuthentication {
    /**
     * Login system
     * @param email username signin
     * @param password password signin
     * @author Chuong.Hoang
     */
    Login(email: string, password: string): Promise<any>;

    /**
     * Signup system
     * @param email username signup
     * @param password password signup
     * @author Chuong.Hoang
     */
    Signup(email: string, password: string): Promise<any>;

    /**
     * Signout system
     * @author Chuong.Hoang
     */
    Signout(): Promise<any>;
}