import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import Home from "./components/Home"

var routes = [
  {
    path: "/",
    component: Home,
    layout: "/auth",
  },
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/products",
    component: Products,
    layout: "/admin",
  },

]
export default routes;
