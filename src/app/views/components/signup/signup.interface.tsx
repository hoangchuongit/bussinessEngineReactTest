export interface IState {
    email: string;
    password: string;
    rpassword: string;
    fullname: string;
    address: string;
    errors: {
        email: boolean,
        password: boolean,
        rpassword: boolean,
        fullname: boolean
    },
    showAlert: boolean,
    alertMessage: string
}

export const UnState: IState = {
    email: "",
    password: "",
    rpassword: "",
    fullname: "",
    address: "",
    errors: {
        email: false,
        password: false,
        rpassword: false,
        fullname: false
    },
    showAlert: false,
    alertMessage: ""
}