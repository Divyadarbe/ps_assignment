import React, { createContext, useState, useContext, useMemo } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
// import "./App.css";
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
        {routes.map((r, key) => (
          <Route path={r.path} exact component={r.component} key={key} />
        ))}
      </Switch>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
