import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <center><div style={{ backgroundColor: 'greenyellow', width: '300px',border:'3px solid black'}}>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleIncrement}>INCREMENT</button>
        </div></center>
    )
}

export default State