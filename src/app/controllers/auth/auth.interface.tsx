export default interface IAuthentication {
    Login(email: string, password: string): Promise<any>;
    Signup(email: string, password: string): Promise<any>;
    Signout(): Promise<any>;
}