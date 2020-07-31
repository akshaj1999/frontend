import React from 'react';
import "./reset_pass.css"

const resetPass = ({details, handleChange, handleSubmit}) => {
    const {name, email, password} = details;
    return (
        <div className="details-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="login-password-input" className="lead">
                            Enter Old Password
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
                </div>

                <div className="form-group">
                <label htmlFor="login-password-input" className="lead">
                            Enter New Password
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
                </div>

                <div className="form-group">
                <label htmlFor="login-password-input" className="lead">
                            Re-enter New Password
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
                </div>

                <button 
                type="submit" 
                className="btn btn-primary">
                    Reset Password
                </button>
            </form>
        </div>
        
    )
}

export default resetPass;