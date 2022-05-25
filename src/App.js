import "./style/App.css";
import React, { useState, useEffect } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";
import { db } from "./FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const docPointer = doc(db, "counter", "number");
  const getNumber = async () => {
    const data = await getDoc(docPointer);
    setCounterValue(Object.values(data.data())[0]);
  };

  useEffect(() => {
    getNumber();
  });

  //useState to force re-render
  const plusButtonHandler = async () => {
    await setDoc(docPointer, { value: counterValue + 1 });
    setCounterValue(counterValue + 1);
    //console.log("pressed plus button!");
  };

  const minusButtonHandler = async () => {
    await setDoc(docPointer, { value: counterValue - 1 });
    setCounterValue(counterValue - 1);
    //console.log("pressed minus button!");
  };

  const resetButtonHandler = async () => {
    await setDoc(docPointer, { value: 0 });
    setCounterValue(0);
    //console.log("pressed reset button!");
  };

  const isCounterValueZero = () => {
    if (counterValue === 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <CounterDisplay counterValue={counterValue} />
      <div className="counter-button-container">
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
