import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routesConfig from "./router.conf";
import AllComponents from "../views";
import checkPermission from "../../libs/checkPermission";

class ARouter extends Component {
  checkPermissions = (component, permissions) => {
    const { auth } = this.props;
    // console.log(auth)
    // if(!auth || permissions.indexOf(auth) === -1){
    //   return null;
    // }

    return checkPermission(auth, permissions) ? component : null;
  };
  render() {
    return (
      <Switch>
        {Object.keys(routesConfig).map(key =>
          routesConfig[key].map(r => {
            const route = r => {
              const Component = AllComponents[r.component];
              return (
                <Route
                  key={r.path}
                  exact={r.exact}
                  path={r.path}
                  render={() =>
                    this.checkPermissions(<Component />, r.permissions)
                  }
                />
              );
            };
            return r.component ? route(r) : r.subs.map(r => route(r));
          })
        )}
      </Switch>
    );
  }
}
export default ARouter;
