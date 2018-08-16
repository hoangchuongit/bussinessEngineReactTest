import * as React from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class CustomNavbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-header">
        <div className="page-header-top">
          <div className="container">
            <div className="page-logo">
              <Link to="/">
                <Image src="assets/img/logo.png" className="logo-default" />
              </Link>
            </div>
            <div className="top-menu">
              <ul className="nav navbar-nav pull-right">
                <li className="dropdown dropdown-user dropdown-dark">
                  <a href="javascript:;" className="dropdown-toggle">
                    <Image src="assets/img/person-1.jpg" className="img-circle" />
                    <span className="username username-hide-mobile">Nick</span>
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
              <Nav pullRight bsStyle="pills" activeKey={2}>
                <NavItem eventKey={1} href="/">
                  Home
                </NavItem>
                <NavItem eventKey={2} href="/calendar">
                  Calendar
                </NavItem>
                <NavItem eventKey={3}>
                  Logout
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
