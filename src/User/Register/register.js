import React, {useState} from "react";
// import useInput from "../Hooks/useInput"
import "./register.css";

function Register() {
   const [details, setDetails] = useState({
       name: "",
       email: "",
       password: "",
       error: "",
       success: ""
   });

   const {name, email, password, error} = details;

   const handleChange = detail => e => {
       setDetails({...details, [detail]: e.target.value})
   }

    const handleSubmit = e => {
        e.preventDefault();
        // POST to DB
    }

    return (
        <div className="register-wrapper">
            <div className="text-center" id="register-heading">
                <h1 className="display-4 heading-main">Sign Up</h1>
                <hr />
            </div>
            <form 
            className="register-form" 
            onSubmit={handleSubmit}
            >
                <label 
                htmlFor="reg-name-input" 
                className="lead"
                >
                    Full Name 
                </label>
                <input 
                type="text" 
                id="reg-name-input" 
                className="form-control" 
                name="Name" 
                required pattern="name" 
                autoComplete="name" 
                placeholder="Full Name" 
                autoFocus
                value={name}
                onChange={handleChange("name")} 
                />

                <label 
                htmlFor="reg-email-input"
                className="lead">
                    Email-id 
                </label>
                <input 
                type="email" 
                id="email" 
                name="email"  
                className="form-control" 
                required pattern="email-id" 
                autoComplete="email" 
                placeholder="Email-id" 
                value={email}
                onChange={handleChange("email")} 
                />

                <label 
                htmlFor="reg-password" 
                className="lead"
                >
                    Password
                </label>
                <input 
                type="password"
                id="reg-password" 
                className="form-control" 
                placeholder="Password" 
                value={password}
                onChange={handleChange("password")} 
                />

                <button 
                type="submit" 
                className="btn btn-primary"
                id="reg-btn"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
export default Register;