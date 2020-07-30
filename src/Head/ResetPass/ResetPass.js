import React from 'react';

const resetPass = ({handleChange, handleSubmit}) => {
    return (
        <div className="details-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="reset-pass" className="lead" id = "input-label">
                        Old Password
                    </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="reset-pass" 
                    autoFocus
                    placeholder="Enter email" 
                    required
                    autoComplete="email" 
                    pattern="email-id" 
                    onChange={handleChange("email")}
                    />
                </div>
                <button 
                type="submit" 
                className="btn btn-primary">
                    Send Password Reset Mail
                </button>
            </form>
        </div>
        
    )
}

export default resetPass;