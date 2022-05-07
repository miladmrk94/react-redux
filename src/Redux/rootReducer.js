import { combineReducers } from "redux";
import iceReducer from "./ice/iceReducer";
import shampooReducer from "./shampoo/shampooReducser";

const rootReducer = combineReducers({
  shampoo: shampooReducer,
  ice: iceReducer,
});

export default rootReducer;
