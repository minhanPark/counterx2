import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const hanldeDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="wrapper">
      <h1 className="header">카운터 x 2</h1>
      <div className="counter-wrapper">
        <button onClick={hanldeDecrement}>-1</button>
        <p className="counter-text">{count}</p>
        <button onClick={handleIncrement}>+1</button>
      </div>
    </div>
  );
}

export default App;
