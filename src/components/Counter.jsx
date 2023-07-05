import React from "react";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="btn">
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>elvis</button>
      <button onClick={decrement}>kuba</button>
    </div>
  );
};

export default Counter;
