import { useState } from "react";
import "./App.css";
import CurrentDateComponent from "./CurrentDateComponent";

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function handleStepsIncrease() {
    setStep((s) => s + 1);
  }

  function handleStepsDecrease() {
    step > 1 ? setStep((s) => s - 1) : "";
  }

  function handleCountIncrease() {
    setCount((c) => c + 1);
  }

  function handleCountDecrease() {
    setCount((c) => c - 1);
  }

  return (
    <div className="content">
      <div>
        <button onClick={handleStepsDecrease}>-</button>&nbsp;&nbsp;&nbsp;
        <span>
          <span>Step:{step}</span>
        </span>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleStepsIncrease}>+</button>
      </div>
      <br />
      <div>
        <button onClick={handleCountDecrease}>-</button>&nbsp;&nbsp;&nbsp;
        <span>
          <span>Count:{count}</span>
        </span>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <CurrentDateComponent stepNo={step} countNo={count} />
    </div>
  );
};

export default App;
