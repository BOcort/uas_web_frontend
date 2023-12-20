// import React from 'react'
import { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Auth} from '../../utils'; // Make sure to provide the correct path to your auth.js file

export default function LoginCard() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login request to the server
            const response = await axios.post('http://localhost:3000/api/user/login', formData);

            // Assuming the server returns a token upon successful login
            const token = response.data.data;
            const tokenstring =JSON.stringify(token);    
            // Save the token to cookies
            Auth.login(tokenstring);
            navigate("/")
            

            // Redirect or perform any other actions after successful login
            // You can use react-router-dom's history to navigate to a different page
            // history.push('/dashboard');
        } catch (error) {
            console.error('Error during login:', error);
            // Handle login error (show an error message, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Email</p>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <p>Password</p>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <input type="submit" value="Simpan" />
            <p>Doesnt Have Account <NavLink to="/signup">Sign Up</NavLink></p>
        </form>
    );
}

