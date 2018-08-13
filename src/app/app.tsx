import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Loadable from "react-loadable";

import "app.css";
import loading from "./views/components/loading.component";

const Navbar = Loadable({ loader: () => import("./views/components/containers/navbar"), loading });
const Home = Loadable({ loader: () => import("./views/components/home"), loading });
const About = Loadable({ loader: () => import("./views/components/about"), loading });
const News = Loadable({ loader: () => import("./views/components/news"), loading });


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('bussinessengine-root'));