import * as React from "react";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import Layout from "../layout.component";
import "./home.css";

export default class Home extends React.Component {

  public constructor(props) {
    super(props);
  }

  public componentDidMount() {
    const $homeContent = $(".page-content")[0];
    $homeContent.classList.add("home-content");
  }


  public componentWillUnmount() {
    const $homeContent = $(".page-content")[0];
    $homeContent.classList.remove("home-content");
  }

  public render() {
    return (
      <Layout>
        <Grid className="home-content">
          <Jumbotron>
            <h2>Welcome to Bussiness Engine - React Test</h2>
            <p>This is Booking System Demo with React, Calendar, Recurring Event</p>
            <a href="https://github.com/hoangchuongit/bussinessEngineReactTest" target="_blank">
              <Button bsStyle="primary">Learn More on Github</Button>
            </a>
          </Jumbotron>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} smOffset={4} className="person-wrapper">
              <Image src="assets/img/mine.jpg" circle className="profile-pic" />
              <h3>Chuong</h3>
              <p>I am a mid-level front-end developer specializing in JavaScript.</p>
            </Col>
          </Row>
        </Grid>
      </Layout>
    )
  }
}
