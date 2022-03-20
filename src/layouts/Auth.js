import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import AuthNavbar from "components/Navbars/AuthNavbar.js";
// import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "../routes.js";

const Auth = (props) => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return <Route path={prop.layout+prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Switch>
        {getRoutes(routes)}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default Auth;
