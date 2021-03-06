import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

const CakeContainer = () => {
  const cakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes:{cakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake </button>
    </div>
  );
};

export default CakeContainer;
