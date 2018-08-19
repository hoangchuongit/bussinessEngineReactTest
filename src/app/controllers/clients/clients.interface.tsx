export default interface IClients {
    CreateUser(id: string, email: string, fullname: string, address: string): Promise<any>;
    GetClients(): Promise<any>;
}