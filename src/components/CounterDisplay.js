import "../style/CounterDisplay.css";

const CounterDisplay = props => {
    return (
        <div className="counter-display-container">
            <h1>{props.counterValue}</h1>
        </div>
    );
}


export default CounterDisplay;