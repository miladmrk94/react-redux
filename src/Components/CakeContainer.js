import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyShampoo } from "../Redux/shampoo/shampooAction";

const CakeContainer = () => {
  const shampoo = useSelector((state) => state.shampoo.numOfShampoo);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of shampoo : {shampoo}</h2>
      <button onClick={() => dispatch(buyShampoo())}>Buy Cake </button>
    </div>
  );
};

export default CakeContainer;
