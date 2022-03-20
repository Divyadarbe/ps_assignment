import { SET_PRODUCTS, REQUEST_PRODUCTS } from "../actions/productsActions";

const initialState = {
  products: [],
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
export default productsReducer;
