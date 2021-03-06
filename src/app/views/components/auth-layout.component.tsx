import * as React from "react";
import { Image } from "react-bootstrap";
import "./auth-layout.css";


class AuthLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    public componentDidMount() {
        $("body").addClass("login");
    }

    public componentWillReceiveProps() {
        $("body").addClass("login");
    }

    public componentWillUnmount() {
        $("body").removeClass("login");
    }

    public render() {

        return (
            <div>
                <div className="logo">
                    <Image src="assets/img/logo.png" />
                </div>
                <div className="content">
                   {this.props.children}
                </div>
                <div className="copyright"> 2018 © Chuong. Bussiness Engine React Test. </div>
            </div >
        );
    }
}

export default AuthLayout;
