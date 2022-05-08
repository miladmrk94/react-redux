import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (value = 1) => {
  return {
    type: BUY_CAKE,
    payload: value,
  };
};
