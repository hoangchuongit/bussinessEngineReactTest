import * as React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";
import { Form, FormGroup, FormControl, Button, Alert } from "react-bootstrap";
import AuthLayout from "../auth-layout.component";
import { IState, UnState } from "./login.interface";
import { NotificatonMessage } from "enum";

import "../auth-layout.css";

class Login extends React.Component<{}, IState> {

    public constructor(props) {
        super(props);
        this.state = UnState;
    }

    public render() {

        const { email, password, showAlert, errors } = this.state;

        return (
            <AuthLayout>
                <Form className="login-form" onSubmit={this.onSubmit} noValidate={true}>
                    <h3 className="form-title">Sign In</h3>
                    {showAlert && <Alert bsStyle="danger" className="text-center" 
                                         onDismiss={() => this.setState({...this.state, showAlert: false})}>
                        <p>{ NotificatonMessage.ALL_FIELD_REQUIRED }</p>
                    </Alert>}
                    <FormGroup controlId="email" className={errors.email && "has-error"}>
                        <FormControl autoFocus type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup controlId="password" className={errors.password && "has-error"}>
                        <FormControl type="password"
                                     name="password" 
                                     placeholder="Password" 
                                     value={password}
                                     onChange={this.onChange}/>
                    </FormGroup>
                    <div className="form-actions text-center">
                        <Button type="submit" className="btn btn-submit uppercase">Login</Button>
                    </div>
                    <div className="create-account">
                        <p> Don't have an account yet ?&nbsp;
                            <Link className="signup-link" to="/signup">Create an account</Link>
                        </p>
                    </div>
                </Form>
            </AuthLayout>
        );
    }

    /**
     * @description function handle when enter to input
     * @author Chuong.Hoang
     */
    private onChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    /**
     * @description function handle submit login form
     * @author Chuong.Hoang
     */
    private onSubmit = e => {
        e.preventDefault();

        const { email, password, errors }  = this.state;

        errors.email = _.isEmpty(email);
        errors.password = _.isEmpty(password);

        const showAlert = errors.email || errors.password;

        this.setState({
            ...this.state,
            errors: errors,
            showAlert: showAlert
        });
    }
}

export default Login;
