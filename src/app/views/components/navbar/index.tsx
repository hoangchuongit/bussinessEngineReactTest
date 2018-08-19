import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { AuthAction } from "../../actions";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
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
              <Nav pullRight bsStyle="pills" activeKey={2}>
                <NavItem eventKey={1} href="/home">
                  Home
                </NavItem>
                <NavItem eventKey={2} href="/calendar">
                  Calendar
                </NavItem>
                <NavItem eventKey={3} onClick={() => this.props.actions.logoutAction()}>
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

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(AuthAction, dispatch) }
}

export default connect(undefined, mapDispatchToProps)(CustomNavbar);
