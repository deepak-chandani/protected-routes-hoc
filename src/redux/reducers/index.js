import { combineReducers } from "redux";
import authReducer from "./authReducer";

const reducer = combineReducers({
  products: (state = [], action) => {
    return state;
  },
  auth: authReducer
});

export default reducer;
