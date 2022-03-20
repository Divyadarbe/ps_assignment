import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, cartData,setCartData }) => {
  console.log("----------", cartData);
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total = total + cartData[i].quantity * cartData[i].price;
    }
    return total;
  };

  const handleQtyClick = (e, label, product) => {
    e.preventDefault();
    //decr/incr qty, if it is 0 remove it from the cart
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id == product.id) {
        if (label == "decrease") {
          if (cartData[i].quantity == 1) {
            let res = cartData.filter((c) => c.id !== product.id);
            setCartData(res);
          } else {
            cartData[i].quantity = cartData[i].quantity - 1;
          }
        } else {
          cartData[i].quantity = cartData[i].quantity + 1;
        }
      }
    }
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="cart-header">
          <span className="cart-heading">
            My Cart<span>{`(${cartData && cartData.length})items`}</span>
          </span>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </div>
        <div className="cart-body">
          {cartData.length > 0 ? (
            cartData.map((c) => (
              <div key={c.id}>
                <img
                  src={process.env.PUBLIC_URL + c.imageURL}
                  width="60"
                  height={60}
                  alt={`image`}
                />
                <div className="prouct-details">
                  <span>{c.name}</span>
                  <div>
                    <div>
                      <button onClick={(e) => handleQtyClick(e, "decrease", c)}>
                        -
                      </button>
                      <span>{c.quantity}</span>
                      <button onClick={(e) => handleQtyClick(e, "increase", c)}>
                        +
                      </button>
                      X Rs.
                      {c.price * c.quantity}
                    </div>
                    <span>Rs.{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-container">
              <div>
                <span>No items in your cart</span>
                <span>Your favourite items are just a click away</span>
              </div>
            </div>
          )}
        </div>
        <div className="cart-footer">
          <button className="btn">Start Shopping</button>
        </div>
      </section>
    </div>
  );
};
export default Modal;
