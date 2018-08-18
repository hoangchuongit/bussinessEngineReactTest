import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history, store } from "./configure-store";
import * as Loadable from "react-loadable";

import { RoutesConst } from "./constants";
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
  const auth = props => !user || !token ? <Redirect to={RoutesConst.SIGNIN} /> : <Component {...props} />;
  return <Route {...rest} render={auth} />;
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Redirect from="/" exact to={RoutesConst.HOME} />
          <Route path={RoutesConst.SIGNIN} component={Login} />
          <Route path={RoutesConst.SIGNUP} component={Signup} />
          <PrivateRoute exact path={RoutesConst.HOME} component={Home} />
          <PrivateRoute path={RoutesConst.CALENDAR} component={Calendar} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('bussinessengine-root')
);