// import React from 'react'
import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { Auth } from "../../utils";
import "./header.css";

export default function Header() {
  const [login, setLogin] = useState(!!Auth.isAuthenticated());
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if the user is logged in
    if (login) {
      // Retrieve user information from cookies
      const userData = JSON.parse(Auth.authenticated())

      // Ensure that userData is not null
      if (userData) {
        // Update the username state
        setUsername(userData.username);
      }
    }
  }, [login]);

  const logout = () => {
    setLogin((prevState) => !prevState)
    Auth.logout();
  };

  return (
    <header>
      <div id="container">
        <div className="logo">
          <NavLink to="/" className="logo">
            Granedia
          </NavLink>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Cari buku mu disini" />
          <button type="submit">
            <FaSearch />
          </button>
        </div>
        <ul className="header-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>

          {/* Conditional rendering based on login status */}
          {!login && (
            <>
              <li className="login">
                <NavLink to="/login" className="login">
                  Login
                </NavLink>
              </li>
              <li className="signup">
                <NavLink to="/signup" className="signup">
                  Sign up
                </NavLink>
              </li>
            </>
          )}

          {login && (
            <>
              <li onClick={() => logout()}>
                <a>Log out</a>
              </li>
              <li >
                <CgProfile />
                {username}
              </li>
            </>

          )}

        </ul>
      </div>
    </header>
  );
}

