import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

const CakeContainer = () => {
  const [value, setValue] = useState(1);
  const cakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>Number of cakes:{cakes} </h2>
      <button onClick={() => dispatch(buyCake(value))}>
        Buy {value} Cake{" "}
      </button>
      <input type="number" onChange={changeHandler} />
    </div>
  );
};

export default CakeContainer;
