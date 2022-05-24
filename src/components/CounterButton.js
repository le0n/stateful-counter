const CounterButton = (props) => {
  const onClickHandler = () => {
    props.onClickHandler();
  };

  return (
    <button onClick={onClickHandler} disabled={props.disabled}>
      {props.text}
    </button>
  );
};

export default CounterButton;
