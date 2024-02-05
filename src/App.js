import { useState } from "react";

import "./App.css";
import CounterText from "./components/counter-text";
import Counter from "./components/counter";

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
      <Counter />
    </div>
  );
}

export default App;
