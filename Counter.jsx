import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increasement = () => {
        setCount(count + 1);
    }

    const decreasement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decreasement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increasement}>Increment</button>
        </div>
    );
}
export default Counter