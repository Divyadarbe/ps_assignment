import productsReducer from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productData: productsReducer,
});

export default rootReducer;
