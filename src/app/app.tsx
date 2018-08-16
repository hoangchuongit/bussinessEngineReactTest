import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Loadable from "react-loadable";

import "app.css";
import loading from "./views/components/loading.component";

const Login = Loadable({ loader: () => import("./views/components/pages/login.component"), loading });
const Signup = Loadable({ loader: () => import("./views/components/pages/signup.component"), loading });
const Page404 = Loadable({ loader: () => import("./views/components/pages/page-404.Component"), loading });
const Home = Loadable({ loader: () => import("./views/components/home"), loading });
const About = Loadable({ loader: () => import("./views/components/about"), loading });
const News = Loadable({ loader: () => import("./views/components/news"), loading });
const Calendar = Loadable({ loader: () => import("./views/components/calendar"), loading });


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/calendar" component={Calendar} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('bussinessengine-root'));