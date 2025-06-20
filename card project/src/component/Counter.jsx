import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <div style={{
                backgroundColor: 'pink',
                border: '10px solid black',
                padding: '30px',
                height: '100px',
                width: '250px',
                textAlign: 'center',
                borderRadius: '10px'
            }}>
                <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;
                <button onClick={() => setCount(0)}>Reset</button>&nbsp;
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
