import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIce } from "../Redux/ice/iceAction";

const IceContainer = () => {
  const ice = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number pf ice :{ice}</h2>
      <button onClick={() => dispatch(buyIce())}>BUY ICE</button>
    </div>
  );
};

export default IceContainer;
