import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0);
    return (
        <div>
            <h3>{Count}</h3>
            <button onClick={() => setCount(Count + 1)}>Increment</button>
            <button onClick={() => setCount(Count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter