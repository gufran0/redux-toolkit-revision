import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const noOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  return (
    <div>
      <h2>number of icecream- {noOfIceCream}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        order icecream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      ></input>
      <button
        onClick={() => {
          dispatch(restocked(value));
        }}
      >
        restock icecream
      </button>
    </div>
  );
};

export default IceCreamView;
