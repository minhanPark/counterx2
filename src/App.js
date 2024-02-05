import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1 className="header">카운터 x 2</h1>
      <div className="counter-wrapper">
        <button>-1</button>
        <p className="counter-text">0</p>
        <button>+1</button>
      </div>
    </div>
  );
}

export default App;
