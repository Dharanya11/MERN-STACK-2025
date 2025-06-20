import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => (res.json()))
            .then((data) => setUser(data))
    });
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
        <center><div style={{ backgroundColor: 'greenyellow', width: '600px', border: '3px solid black' }}>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleIncrement}>INCREMENT</button>
            <ol>
                {user.map((data) => (
                    <>

                        <div style={{ backgroundColor: 'red', border: '2px solid black',  width: '300px' }}>
                            <ol>
                                <li>Id: {data.id}</li>
                                <li>Name: {data.name}</li>
                                <li>Username: {data.username}</li>
                                <li>Email: {data.email}</li>
                                <li>
                                    Address:
                                    <ul type="none" style={{ marginTop: '5px' }}>
                                        <li>Street: {data.address.street}</li>
                                        <li>Suite: {data.address.suite}</li>
                                        <li>City: {data.address.city}</li>
                                        <li>Zipcode: {data.address.zipcode}</li>
                                    </ul>
                                </li>
                                <li>
                                    GEO:
                                    <ul type="none" style={{ marginTop: '5px' }}>
                                        <li>Latitude: {data.address.geo.lat}</li>
                                        <li>Longitude: {data.address.geo.lng}</li>
                                    </ul>
                                </li>
                                <li>Phone: {data.phone}</li>
                                <li>Website: {data.website}</li>
                                <li>
                                    Company details:
                                    <ul type="none" style={{ marginTop: '5px' }}>
                                        <li>Company Name: {data.company.name}</li>
                                        <li>Company catchPhrase: {data.company.catchPhrase}</li>
                                        <li>Company bs: {data.company.bs}</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <br />
                    </>
                ))}
            </ol>
        </div></center>
    )
}

export default Effect



