import "../style/CounterButton.css"
const CounterButton = (props) => {
  const onClickHandler = () => {
    props.onClickHandler();
  };

  return (
    <button
      onClick={onClickHandler}
      disabled={props.disabled}
      className="counter-button"
    >
      {props.text}
    </button>
  );
};

export default CounterButton;
