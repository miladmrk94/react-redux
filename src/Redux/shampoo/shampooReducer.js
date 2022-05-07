import { BUY_SHAMPOO } from "./shampooTypes";

const initialState = {
  numOfShampoo: 10,
};

const shampooReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHAMPOO:
      return { ...state, numOfShampoo: state.numOfShampoo - 1 };

    default:
      return state;
  }
};
export default shampooReducer;
