import CounterText from "../counter-text";
import "./index.css";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const hanldeDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter-wrapper">
      <button onClick={hanldeDecrement}>-1</button>
      <CounterText num={count} />
      <button onClick={handleIncrement}>+1</button>
    </div>
  );
}
