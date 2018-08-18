export default interface IClients {
    CreateUser(id: string, username: string, email: string, fullname: string, address: string): Promise<any>;
    GetUsers(): Promise<any>;
}