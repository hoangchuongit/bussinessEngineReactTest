import * as React from "react";
import { Link } from "react-router-dom";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import AuthLayout from "../auth-layout.component";
import "../auth-layout.css";

class Signup extends React.Component {

    render() {
        return (
            <AuthLayout>
                <form className="login-form">
                    <h3 className="form-title">Sign Up</h3>
                    <FormGroup controlId="fullName">
                        <FormControl autoFocus type="text" placeholder="Full Name" />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormControl type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup controlId="address">
                        <FormControl type="text" placeholder="Address" />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup controlId="rpassword">
                        <FormControl type="password" placeholder="Re-type Your Password" />
                    </FormGroup>
                    <div className="form-actions text-center">
                        <Link to="/signin">
                            <Button type="button" className="btn uppercase pull-left">Back</Button>
                        </Link>
                        <Button type="submit" className="btn btn-submit uppercase pull-right">Submit</Button>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}

export default Signup;
