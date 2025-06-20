import React, { useState } from 'react';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handlechange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            email: "",
            password: ""
        });
    };

    return (
        <div style={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8f8f8'
        }}>
            <div style={{
                backgroundColor: 'violet',
                border: '10px solid black',
                padding: '30px',
                width: '300px',
                textAlign: 'center',
                borderRadius: '10px'
            }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handlechange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handlechange}
                        />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;
