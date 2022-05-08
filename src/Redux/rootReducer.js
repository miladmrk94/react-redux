import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceReducer from "./ice/iceReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: userReducer,
});

export default rootReducer;
