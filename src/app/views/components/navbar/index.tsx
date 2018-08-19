import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { AuthAction } from "../../actions";
import { Navbar, NavItem, Image } from "react-bootstrap";
import "./navbar.css";

interface IDispatchFromProps {
  actions: typeof AuthAction;
}

class CustomNavbar extends React.Component<IDispatchFromProps> {

  constructor(props: IDispatchFromProps) {
    super(props);
  }

  render() {
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
                    <Image src="assets/img/mine.jpg" className="img-circle" />
                    <span className="username username-hide-mobile">Chuong</span>
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
