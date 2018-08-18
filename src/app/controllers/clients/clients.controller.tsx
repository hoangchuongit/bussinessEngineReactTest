import { db } from '../../../config/firebase.config';
import IClients from "./clients.interface";
import { success, error } from "../common.controller";

class Clients implements IClients {
    /**
     * Create new client
     * @param id uid of client
     * @param username client's username 
     * @param email client's email
     * @author Chuong.Hoang
     */
    public CreateUser(id: string, username: string, email: string, fullname: string, address: string): Promise<any> {
        return db.ref(`clients/${id}`).set({ username, email, fullname, address })
            .then(success)
            .catch(error);
    }

    /**
     * Get client list.
     * @author Chuong.Hoang
     */
    public GetUsers(): Promise<any> {
        return db.ref('clients').once('value')
            .then(success)
            .catch(error);
    }
}

export default new Clients();