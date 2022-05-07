import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyShampoo } from "../Redux/shampoo/shampooAction";

const CakeContainer = () => {
  const shampoo = useSelector((state) => state.shampoo.shampoo);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of shampoo : {shampoo}</h2>
      <button onClick={() => dispatch(buyShampoo())}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;
