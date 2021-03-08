import React from 'react';
{/* We can create state in a class via either the constructor method seen below or by directly calling state such as doing state = {},
this is transpiled by babel as a constructor method however if not using babel will not work on all browsers.*/}

{/* When declaring function in react you do not need to start with "function, also function do not implicitly bind the parent component so when calling it you must bind the component with the bind() method."*/}
const Counter = (props) => {
    return (
      <div className ="counter">
        <button className = "counter-action decrement" onClick={() => props.changeScore(-1)}> - </button>
        <span className="counter-score">{props.score}</span>
        <button className = "counter-action increment" onClick={() => props.changeScore(1)}> + </button>
      </div>
    );
}
export default Counter;
