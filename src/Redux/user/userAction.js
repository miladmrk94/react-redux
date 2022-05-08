import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./userTypes";

import axios from "axios";

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users,
  };
};

export const userFailure = (error) => {
  return {
    type: USER_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data;
        dispatch(userSuccess(user));
      })
      .catch((error) => {
        dispatch(userFailure("errorsssssss"));
      });
  };
};
