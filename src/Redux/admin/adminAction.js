import axios from "axios";
import { ADMIN_FAILURE, ADMIN_REQUEST, ADMIN_SUCCESS } from "./adminTypes";

export const adminRequest = () => {
  return {
    type: ADMIN_REQUEST,
  };
};

export const adminSuccess = (users) => {
  return {
    type: ADMIN_SUCCESS,
    payload: users,
  };
};

export const adminFilure = (error) => {
  return {
    type: ADMIN_FAILURE,
    payload: error,
  };
};

export const fetchAdmin = () => {
  return function (dispatch) {
    dispatch(adminRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(adminSuccess(res.data));
      })
      .catch((err) => {
        dispatch(adminFilure("be moshkel khordeh" + err));
      });
  };
};
