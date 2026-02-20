import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div className="counter-value" style={{ padding: "20px" }}>
      
      <h2>Counter</h2>
      <h1 style={{ color: value === 0 ? "red" : "green" }}> {value} </h1>
      <button onClick={() => setValue(value + 1)}> Increment </button>
      <button onClick={() => value > 0 && setValue(value - 1)} > Decrement </button>
      <button onClick={() => setValue(0)}>Reset</button>

    </div>
  );
}

export default Counter;