import * as React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Form, FormGroup, FormControl, Button, Alert } from "react-bootstrap";
import AuthLayout from "../auth-layout.component";

import { AuthAction } from "../../actions";
import { IState, UnState } from "./login.interface";
import { MessagesConst, RoutesConst } from "../../../constants";

import "../auth-layout.css";

interface IDispatchFromProps {
    actions: typeof AuthAction;
}

class Login extends React.Component<IDispatchFromProps, IState> {

    public constructor(props: IDispatchFromProps) {
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
                        onDismiss={() => this.setState({ ...this.state, showAlert: false })}>
                        <p>{MessagesConst.ALL_FIELD_REQUIRED}</p>
                    </Alert>}
                    <FormGroup controlId="email" className={errors.email && "has-error"}>
                        <FormControl autoFocus type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup controlId="password" className={errors.password && "has-error"}>
                        <FormControl type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.onChange} />
                    </FormGroup>
                    <div className="form-actions text-center">
                        <Button type="submit" className="btn btn-submit uppercase">Login</Button>
                    </div>
                    <div className="create-account">
                        <p> Don't have an account yet ?&nbsp;
                            <Link className="signup-link" to={RoutesConst.SIGNUP}>Create an account</Link>
                        </p>
                    </div>
                </Form>
            </AuthLayout>
        );
    }

    /**
     * @description function handle when enter to input
     * @param e is event listener of dom
     * @author Chuong.Hoang
     */
    private onChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    /**
     * @description function check valid login form
     * @author Chuong.Hoang
     */
    private isValid = () => {
        const { email, password, errors } = this.state;

        errors.email = _.isEmpty(email);
        errors.password = _.isEmpty(password);

        const showAlert = errors.email || errors.password;

        this.setState({
            ...this.state,
            errors: errors,
            showAlert: showAlert
        });

        if (showAlert) return false;
        return true;
    }

    /**
     * @description function handle submit login form
     * @param e is event listener of dom
     * @author Chuong.Hoang
     */
    private onSubmit = e => {
        e.preventDefault();
        if (this.isValid()) {
            const { email, password } = this.state;
            this.props.actions.loginAction(email, password);
        }
    }
}

function mapDispatchToProps (dispatch) {
    return { actions: bindActionCreators(AuthAction, dispatch) }
}

export default connect(undefined, mapDispatchToProps)(Login);
