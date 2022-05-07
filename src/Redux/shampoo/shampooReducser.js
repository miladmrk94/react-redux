import { BUY_SHAMPOO } from "./shampooTypes";

const initialState = {
  shampoo: 15,
};

const shampooReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHAMPOO:
      return { ...state, shampoo: state.shampoo - 1 };

    default:
      return state;
  }
};

export default shampooReducer;
