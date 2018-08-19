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

import { servicesRef, staffsRef } from "../config/firebase.config";

const Login = Loadable({ loader: () => import("views/components/login"), loading });
const Signup = Loadable({ loader: () => import("views/components/signup"), loading });
const Page404 = Loadable({ loader: () => import("views/components/pages/page-404.Component"), loading });
const Home = Loadable({ loader: () => import("views/components/home"), loading });
const Calendar = Loadable({ loader: () => import("views/components/calendar"), loading });

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = sessionStorage.getItem(StorageItem.USER_NAME);
  const uid = sessionStorage.getItem(StorageItem.UID);
  const auth = props => !user || !uid ? <Redirect to={RoutesConst.SIGNIN} /> : <Component {...props} />;
  return <Route {...rest} render={auth} />;
};

class App extends React.Component {

  public constructor(props) {
    super(props);

    Promise.all([
      servicesRef.once("value"),
      staffsRef.once("value")
    ]).then(snapshots => {
      if (snapshots && !snapshots[0].exists() && !snapshots[1].exists()) {

        const services: Array<object> = [
          {
            name: "Bloom Spa", location: "Trung Hòa, Hà Nội",
            staffs: [{ name: "Trần Hồng Nhung" }, { name: "Phạm Ngọc Lan" }, { name: "Vương Thị Thanh Hương" }]
          },
          {
            name: "HaiTrieu hair salon", location: "Nguyễn Chí Thanh, Hà Nội",
            staffs: [{ name: "Ngô Việt Cường" }, { name: "Nguyễn An Nam" }, { name: "Vương Văn Dũng" }]
          },
          {
            name: "TuanVu Fitness", location: "Cầu Giấy, Hà Nội",
            staffs: [{ name: "Ngô Phương Lan" }, { name: "Trần Hào Quang" }, { name: "Ngô Đình Trọng" }]
          }
        ];

        services.map((service: any) => {
          let service_key = servicesRef.push().key;
          
          servicesRef.push({
            id: service_key,
            name: service.name,
            location: service.location
          });

          service.staffs && service.staffs.map((staff: any) => {
            staffsRef.push({
              name: staff.name,
              service_id: service_key
            });
          });
        });
      }
    })
  }

  public render() {
    return (
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
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('bussinessengine-root')
);