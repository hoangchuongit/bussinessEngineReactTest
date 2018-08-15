import * as React from "react";
import { Image, FormGroup, FormControl, Button } from "react-bootstrap";
import "./login.css";

export default class Login extends React.Component {

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
                                <a href="javascript:;" id="register-btn"> Create an account </a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="copyright"> 2018 © Chuong. Bussiness Engine React Test. </div>
            </div >
        );
    }
}
