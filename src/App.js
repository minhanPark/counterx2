import "./App.css";

import Counter from "./components/counter";

function App() {
  return (
    <div className="wrapper">
      <h1 className="header">카운터 x 2</h1>
      <div className="container">
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
