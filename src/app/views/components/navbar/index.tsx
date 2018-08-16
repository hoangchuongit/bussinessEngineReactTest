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
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Image src="assets/img/logo.png" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight bsStyle="pills" activeKey={4}>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/about">
              About
            </NavItem>
            <NavItem eventKey={3} href="/news">
              News
            </NavItem>
            <NavItem eventKey={4} href="/calendar">
              Calendar
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
