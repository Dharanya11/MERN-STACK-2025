import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign Up Data:", formData);
        setFormData({
            name: "",
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
                backgroundColor: 'lightgreen',
                border: '10px solid black',
                padding: '30px',
                width: '300px',
                textAlign: 'center',
                borderRadius: '10px'
            }}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default Signup;
