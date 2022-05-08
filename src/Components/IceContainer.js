import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIce } from "../Redux/ice/iceAction";

const IceContainer = () => {
  const ices = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number pf ice : {ices}</h2>
      <button onClick={() => dispatch(buyIce())}>BUY ICE</button>
    </div>
  );
};

export default IceContainer;
