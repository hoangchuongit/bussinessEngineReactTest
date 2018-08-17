import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./configure-store";
import * as Loadable from "react-loadable";
import { StorageItem } from "enum";

import "app.css";
import loading from "views/components/loading.component";

const Login = Loadable({ loader: () => import("views/components/login"), loading });
const Signup = Loadable({ loader: () => import("views/components/signup"), loading });
const Page404 = Loadable({ loader: () => import("views/components/pages/page-404.Component"), loading });
const Home = Loadable({ loader: () => import("views/components/home"), loading });
const Calendar = Loadable({ loader: () => import("views/components/calendar"), loading });

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = sessionStorage.getItem(StorageItem.USER_NAME);
  const token = sessionStorage.getItem(StorageItem.ACCESS_TOKEN);
  const auth = props => !user || !token ? <Redirect to="/signin" /> : <Component {...props} />;
  return <Route {...rest} render={auth} />;
};


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Redirect from="/" exact to="/home" />
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute path="/calendar" component={Calendar} />
              <Route component={Page404} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('bussinessengine-root'));