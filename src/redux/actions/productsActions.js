import axios from "axios";
export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS,
  };
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    console.log("*****************")
    dispatch(requestProducts());
    await fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data)=>console.log("@@@@@@@@@@",data))
      // .then((data) => {setProducts(data); console.log("+++++++++++++++++++++",data)})
      .catch((err) => console.log(err.response.data));
  };
};


