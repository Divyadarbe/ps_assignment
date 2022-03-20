import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import Modal from "./components/Modal";
import "./style.css";

const Header = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const [show, setShow] = useState(false);
  console.log("Cart data", cartData);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Logo
        </Link>
        <ul>
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/products">
              Products
            </Link>
          </li>
          <li style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <Link className="nav-item" to="/auth/login">
                Sign in
              </Link>
              <Link className="nav-item" to="/auth/register">
                Register
              </Link>
            </div>
            <button onClick={showModal}>Cart {cartData.length} items</button>
          </li>
        </ul>
      </nav>
      <Modal
        show={show}
        handleClose={hideModal}
        cartData={cartData}
        setCartData={setCartData}
      ></Modal>
    </header>
  );
};
export default Header;
