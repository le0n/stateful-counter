import React, { Children, useState } from "react";

const CounterButton = (props) => {
  const onClickHandler = () => {
    props.onClickHandler();
  };
  const disableButton = () => {
    props.disableButton();
  }
  return (
    <button onClick={onClickHandler} disabled={props.disabled}>
      {props.text}
    </button>
  );
};

export default CounterButton;
