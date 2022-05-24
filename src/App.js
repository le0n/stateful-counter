import "./App.css";
import React, { useState, useEffect } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";
import { db } from "./FirebaseConfig";
import { doc, getDoc, setDoc} from "firebase/firestore";

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const docPointer = doc(db, "counter", "number");

  useEffect(() => {
    const getNumber = async () => {
      const data = await getDoc(docPointer);
      setCounterValue(Object.values(data.data())[0])
      console.log(Object.values(data.data())[0]);
    };
    getNumber();
  }, [])

  const plusButtonHandler = async () => {
    setCounterValue(counterValue + 1);

    console.log("pressed plus button!");
  };

  const minusButtonHandler = async () => {
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
