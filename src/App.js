import "./App.css";
import React, { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const plusButtonHandler = () => {
    setCounterValue(counterValue + 1);
    console.log("pressed plus button!");
  };

  const minusButtonHandler = () => {
    setCounterValue(counterValue - 1);
    console.log("pressed minus button!");
  };

  const resetButtonHandler = () => {
    setCounterValue(0);
    console.log("pressed reset button!");
  };

  const isCounterValueZero = () => {
    if (counterValue == 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <CounterDisplay counterValue={counterValue} />
      <div>
        <CounterButton
          text="+"
          onClickHandler={plusButtonHandler}
          disabled={false}
        ></CounterButton>
        <CounterButton
          text="-"
          onClickHandler={minusButtonHandler}
          disabled={isCounterValueZero()}
        ></CounterButton>
        <CounterButton
          text="reset"
          onClickHandler={resetButtonHandler}
          disabled={isCounterValueZero()}
        ></CounterButton>
      </div>
    </div>
  );
}

export default App;
