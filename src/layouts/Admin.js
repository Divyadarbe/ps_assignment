import React from "react";
import {Switch,Route,Redirect} from "react-router-dom"
// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import AdminFooter from "components/Footers/AdminFooter.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import { decodeToken, refreshToken } from "services/authServices";

import routes from "../routes.js"

const Admin = (props) => {
  const isAuthenticatedUser = () => {
    return true
    // if (sessionStorage.getItem("token")) return true;
    // else return false;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (isAuthenticatedUser() && prop.layout === "/admin") {
        return <Route  path={prop.layout+prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  return (
    <>
      {/* <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/dashboard",
          imgSrc: require("../assets/img/brand/argon-react.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/auth/login" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div> */}
      <Switch>
        {getRoutes(routes)}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default Admin;
