import { combineReducers } from "redux";
import adminReducer from "./admin/adminReducer";
import cakeReducer from "./cake/cakeReducer";
import iceReducer from "./ice/iceReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: userReducer,
  admin: adminReducer,
});

export default rootReducer;
