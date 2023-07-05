import React, { useState } from "react";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1 className="App">Counter and Paragraph App</h1>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Paragraph />
    </div>
  );
};

export default App;
