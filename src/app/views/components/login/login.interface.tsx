export interface IState {
    email: string;
    password: string;
    errors: {
        email: boolean,
        password: boolean
    },
    showAlert: boolean
}

export const UnState: IState = {
    email: "",
    password: "",
    errors: {
        email: false,
        password: false
    },
    showAlert: false
}