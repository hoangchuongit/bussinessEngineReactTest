import * as React from "react";
import * as _ from "lodash";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { AuthAction } from "../../actions";
import { Navbar, NavItem, Image } from "react-bootstrap";
import { ClientsController } from "../../../controllers";
import { StorageItem } from "enum";

import "./navbar.css";

interface IDispatchFromProps {
  actions: typeof AuthAction;
}

interface IState {
  fullName: string
};

const UnState: IState = {
  fullName: ""
}

class CustomNavbar extends React.Component<IDispatchFromProps, IState> {

  constructor(props: IDispatchFromProps) {
    super(props);

    this.state = UnState;

    let fullName = sessionStorage.getItem(StorageItem.FULL_NAME);

    if (!fullName) {
      ClientsController.GetClients().then(snapshot => {
        const clients = snapshot.val();
        const emailLogined = sessionStorage.getItem(StorageItem.USER_NAME);

        for (let key in clients) {
          if (clients[key].email === emailLogined) {
            fullName = clients[key].fullname;
            break;
          }
        }

        this.setState({
          ...this.state,
          fullName: fullName
        })
      });
    }
  }

  render() {

    const { fullName } = this.state;

    return (
      <div className="page-header">
        <div className="page-header-top">
          <div className="container">
            <div className="page-logo">
              <Link to="/home">
                <Image src="assets/img/logo.png" className="logo-default" />
              </Link>
            </div>
            <div className="top-menu">
              <ul className="nav navbar-nav pull-right">
                <li className="dropdown dropdown-user dropdown-dark">
                  <a href="javascript:;" className="dropdown-toggle">
                    <Image src="assets/img/no_avatar.png" className="img-circle" />
                    <span className="username username-hide-mobile">{fullName}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-header-menu">
          <Navbar default collapseOnSelect>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <ul className="nav nav-pills navbar-nav navbar-right">
                <li>
                  <NavLink to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calendar">
                    Calendar
                  </NavLink>
                </li>
                <NavItem onClick={() => this.props.actions.logoutAction()}>
                  Logout
                </NavItem>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(AuthAction, dispatch) }
}

export default connect(undefined, mapDispatchToProps)(CustomNavbar);
