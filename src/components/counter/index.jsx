import CounterText from "../counter-text";
import "./index.css";

export default function Counter() {
  return (
    <div className="counter-wrapper">
      <button onClick={() => {}}>-1</button>
      <CounterText />
      <button onClick={() => {}}>+1</button>
    </div>
  );
}
