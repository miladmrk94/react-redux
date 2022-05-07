import { BUY_ICE } from "./iceTypes";

const initialState = {
  ice: 6,
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return { ...state, ice: state.ice - 1 };

    default:
      return state;
  }
};

export default iceReducer;
