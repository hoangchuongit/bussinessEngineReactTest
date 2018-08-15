import * as React from "react";
import { Row, Col } from "react-bootstrap";
import "./page-404.css";

export default class Login extends React.Component {

    componentWillMount() {
        $("body").addClass("page-404");
    }

    componentWillUnmount() {
        $("body").removeClass("page-404");
    }

    render() {
        return (
            <Row>
                <Col md={12} className="content">
                    <div className="number font-red">404</div>
                    <div className="details">
                        <h3>Oops! You're lost.</h3>
                        <p> We can not find the page you're looking for.<br/>
                        <a href="/">Return home!</a></p>
                    </div>
                </Col>
            </Row>
        );
    }
}
