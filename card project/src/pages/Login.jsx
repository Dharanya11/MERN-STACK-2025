import React from 'react'

const Login = () => {
    return (
        <div style={{ backgroundColor: 'violet', border: '2px solid black', padding: '10px', width: '250px'}}>
            <h2>Login</h2>
            <form>
                <label>Username: </label>
                <input type="text" id="username" /><br></br>
                <label>Password: </label>
                <input type="password" id="password" /><br></br>
                <button type="submit">Login</button>
            </form>
            <br></br>
        </div>
    )
}
export default Login