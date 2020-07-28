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
            <div className="register-header">
                <h1>Sign Up</h1>
                <hr />
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <label for="name" className="lead">
                    Full Name 
                </label>
                <input 
                type="text" 
                id="name" 
                className="input-field" 
                name="Name" 
                required pattern="name" 
                autocomplete="name" 
                placeholder=" Full Name" 
                autofocus
                value={name}
                onChange={handleChange("name")} />

                <label for="email" className="lead">
                    Email-id 
                </label>
                <input 
                type="email" 
                id="email" 
                name="email"  
                className="input-field" 
                required autocomplete="email" 
                pattern="email-id" 
                placeholder=" email-id" 
                value={email}
                onChange={handleChange("email")} />

                <label for="password" className="lead">
                    Password
                </label>
                <input 
                type="password"
                 id="password" 
                 className="input-field" 
                 placeholder=" password" 
                value={password}
                onChange={handleChange("password")} />

                <button type="submit" className="reg-btn">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
export default Register