import * as React from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import AuthLayout from "./auth-layout.component";
import "./login.css";


class Login extends React.Component {

    public render() {

        return (
            <AuthLayout>
                <form className="login-form">
                    <h3 className="form-title">Sign In</h3>
                    <FormGroup controlId="email">
                        <FormControl autoFocus type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                    <div className="form-actions text-center">
                        <Button type="submit" className="btn btn-submit uppercase">Login</Button>
                    </div>
                    <div className="create-account">
                        <p> Don't have an account yet ?&nbsp;
                            <a href="/signup"> Create an account </a>
                        </p>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}

export default Login;
