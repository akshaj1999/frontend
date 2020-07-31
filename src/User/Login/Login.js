import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./login.css"

const LoginPage = () => {
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
        <div className="loginpage-container">
            <div className="login-bg-img-container">
                <div className="login-container">
                    <div className="text-center" id="login-heading">
                        <h1 className="display-4 heading-main">Sign In</h1>
                        <hr />
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label 
                        htmlFor="login-email-input" 
                        className="lead">
                            Email-id
                        </label>
                        <input 
                        type="email" 
                        id="login-email-input" 
                        name="email"  
                        className="form-control"
                        autoComplete="email" 
                        pattern="email-id" 
                        autoFocus placeholder="email-id"
                        value={email} 
                        onChange={handleChange("email")}
                        aria-describedby="emailHelp" 
                        />

                        <label htmlFor="login-password-input" className="lead">
                            Password
                        </label>
                        <input 
                        type="password" 
                        id="login-password-input" 
                        name="password" 
                        className="form-control" 
                        placeholder="password" 
                        value={password} 
                        onChange={handleChange("password")}
                        />

                        <button 
                        type="submit" 
                        className="btn btn-primary"
                        id="signin-btn"
                        >
                            Sign In
                        </button>

                        <Link className="btn btn-primary" id="register-link"
                        exact to='/user/register'
                        >
                            Register Here
                        </Link>
                        <Link exact to="/forgot-password" className="forgot-password">Forgot Password</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;