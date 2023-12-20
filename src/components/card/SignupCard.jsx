import { useState } from 'react';
import "./SignupCard.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SignupCard() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data ke server
      const response = await axios.post('http://localhost:3000/api/user', formData);
      console.log(response.data); 
      navigate("/")
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Username</p>
        <input type="text" name="username" id="username" value={formData.nama} onChange={handleChange} />
      </div>
      <div>
        <p>Email</p>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <p>Password</p>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit" value="Simpan" onClick={handleSubmit} />
      <p>Have Account <NavLink to="/login">Log in</NavLink></p>
    </form>
  );
}
