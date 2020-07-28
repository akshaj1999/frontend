import React, { useState } from "react";
import {Link} from "react-router-dom";
// import Register from "../Register/Register"
// import "../Register/register.css"
// import "./login.css"

function Login({match}) {
    const[details, setDetails] = useState({
        email: "", 
        password: "", 
        error: "",
        success: "",
        isAuth: ""
    });

    const { email, password, error, success, isAuth} = details;

    const handleChange = detail => e => {
        setDetails({...details, [detail]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Authenticate
        // Redirect or Display Error Message
    }


    return (
        <div className="login-container">
            <div className="heading">
                <h1 className="heading-main">Sign In</h1>
                <hr className="heading-line" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" className="details">
                    Email-id
                </label>
                <input 
                type="email" 
                id="email" 
                name="email"  
                className="input-field"
                autoComplete="email" 
                pattern="email-id" 
                autoFocus placeholder=" email-id" 
                value={email} 
                onChange={handleChange("email")} 
                />

                <label htmlFor="password" className="details">
                    Password
                </label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                className="input-field" 
                placeholder=" password" 
                value={password} 
                onChange={handleChange(email)}/>

                <button type="submit" className="button">
                    Sign In
                </button>

                <Link className="button" id="reg-link" to='/user/register'>
                    Register Here
                </Link>
            </form>
        </div>
        );
}

export default Login;