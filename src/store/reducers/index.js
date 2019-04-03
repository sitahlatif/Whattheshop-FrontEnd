import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import authenticationsReducer from "./authenticationsReducer";
import ordersReducer from "./ordersReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  productsRoot: productsReducer,
  authenticationsRoot: authenticationsReducer,
  ordersRoot: ordersReducer,
  profileRoot: profileReducer
});
