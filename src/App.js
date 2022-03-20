import React, { createContext, useState, useContext, useMemo } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import Home from "./components/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";
import routes from "./routes";

export const CartContext = createContext();

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Home} />
          <Route path="/admin" render={(props) => <Admin {...props} />} />
          <Route path="/auth" render={(props) => <Auth {...props} />} /> */}
        {routes.map((r, key) => (
          <Route path={r.path} exact component={r.component} />
        ))}
      </Switch>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
