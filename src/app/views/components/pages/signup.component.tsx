import * as React from "react";
import { Image, FormGroup, FormControl, Button } from "react-bootstrap";
import "./login.css";

export default class Signup extends React.Component {

    componentWillMount() {
        $("body").addClass("login");
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    componentWillReceiveProps() {
        $("body").addClass("login");
    }


    componentWillUnmount() {
        $("body").removeClass("login");
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <Image src="assets/img/logo.png" />
                </div>
                <div className="content">
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
                            <Button type="button" className="btn uppercase pull-left">Back</Button>
                            <Button type="submit" className="btn btn-submit uppercase pull-right">Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="copyright"> 2018 © Chuong. Bussiness Engine React Test. </div>
            </div >
        );
    }
}
