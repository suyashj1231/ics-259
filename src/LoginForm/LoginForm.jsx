import React from "react";
import "./LoginForm.css";
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import backgroundImage from '../assets/esc_logo_no_bg.png';

function LoginForm() {
    return (
      <div className="wrapper">
        <form action="">
        <img src={backgroundImage} alt="ESC Logo" className="club-logo"></img>
            <h1>Login</h1>
            <div className="input-text-box">
                <input type="text" placeholder="Username" required />
                <FaUser className="icon" />
            </div>
            <div className="input-text-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" /> 
            </div>

            <div className="remember-forgot">
                {/* <label> <input type="checkbox" />Remember Me </label> */}
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p><a href="##">Request Login Credentials?</a></p>
            </div>
        </form>
      </div>
    );
  }
  
  export default LoginForm;