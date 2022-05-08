import { ADMIN_FAILURE, ADMIN_REQUEST, ADMIN_SUCCESS } from "./adminTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_REQUEST:
      return { ...state, loading: true };
    case ADMIN_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case ADMIN_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default adminReducer;
