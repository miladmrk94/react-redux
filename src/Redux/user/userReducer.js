import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true };

    case USER_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case USER_FAILURE:
      return { ...state, loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default userReducer;
