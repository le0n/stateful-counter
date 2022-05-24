import React, { useState } from 'react';

const CounterDisplay = props => {
    return (
        <div>
            <h1>{props.counterValue}</h1>
        </div>
    );
}


export default CounterDisplay;