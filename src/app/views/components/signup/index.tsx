import * as React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Form, FormGroup, FormControl, Button, Alert } from "react-bootstrap";
import AuthLayout from "../auth-layout.component";

import { AuthAction } from "../../actions";
import { IState, UnState } from "./signup.interface";
import { MessagesConst, RoutesConst } from "../../../constants";
import { isEmailValid, isPasswordValid } from "helpers";

import "../auth-layout.css";

interface IDispatchFromProps {
    actions: typeof AuthAction;
}

class Signup extends React.Component<IDispatchFromProps, IState> {

    public constructor (prop: IDispatchFromProps) {
        super(prop);
        this.state = UnState;
    }

    public render() {

        const { email, password, rpassword, fullname, address, errors, showAlert, alertMessage } = this.state;

        return (
            <AuthLayout>
                <Form className="login-form" noValidate={true} onSubmit={this.onSubmit}>
                    <h3 className="form-title">Sign Up</h3>
                    {
                        showAlert && 
                        <Alert bsStyle="danger" className="text-center" 
                               onDismiss={() => this.setState({...this.state, showAlert: false})}>
                            <p dangerouslySetInnerHTML={{__html: alertMessage}}></p>
                        </Alert>
                    }
                    <FormGroup controlId="fullName" className={errors.fullname && "has-error"}>
                        <FormControl autoFocus type="text" 
                                     name="fullname" placeholder="Full Name"
                                     value={fullname}
                                     onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup controlId="email" className={errors.email && "has-error"}>
                        <FormControl type="email" 
                                     name="email" placeholder="Email"
                                     value={email}
                                     onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup controlId="address">
                        <FormControl type="text" 
                                     name="address" placeholder="Address"
                                     value={address}
                                     onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup controlId="password" className={errors.password && "has-error"}>
                        <FormControl type="password" 
                                     name="password" placeholder="Password"
                                     value={password}
                                     onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup controlId="rpassword" className={errors.rpassword && "has-error"}>
                        <FormControl type="password" 
                                     name="rpassword" placeholder="Re-type Your Password"
                                     value={rpassword}
                                     onChange={this.onChange} />
                    </FormGroup>
                    <div className="form-actions text-center">
                        <Link to={RoutesConst.SIGNIN}>
                            <Button type="button" className="btn uppercase pull-left">Back</Button>
                        </Link>
                        <Button type="submit" className="btn btn-submit uppercase pull-right">Submit</Button>
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

        const { fullname, email, password, rpassword, errors }  = this.state;
        
        let alertMessage: Array<string> = [];

        errors.fullname = _.isEmpty(fullname);
        errors.email = _.isEmpty(email);
        errors.password = _.isEmpty(password);
        errors.rpassword = _.isEmpty(rpassword);

        if (errors.fullname || errors.email || errors.password || errors.rpassword) {
            alertMessage.push(MessagesConst.ALL_FIELD_REQUIRED);
        } else {
            if (!isEmailValid(email)) {
                errors.email = true;
                alertMessage.push(MessagesConst.EMAIL_INVALID); 
            }

            if (!isPasswordValid(password)) {
                errors.password = true;
                alertMessage.push(MessagesConst.PASSWORD_INVALID); 
            }

            if (password !== rpassword) {
                errors.password = true;
                errors.rpassword = true;
                alertMessage.push(MessagesConst.PASSWORD_NOT_MATCH);
            }
        } 

        const showAlert = alertMessage.length ?  true : false;

        this.setState({
            ...this.state,
            showAlert: showAlert,
            alertMessage: alertMessage.join("<br/>")
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
            const { email, password, fullname, address } = this.state;
            this.props.actions.signupAction(email, password, fullname, address);
        }
    }
}

function mapDispatchToProps (dispatch) {
    return { actions: bindActionCreators(AuthAction, dispatch) }
}

export default connect(undefined, mapDispatchToProps)(Signup);
