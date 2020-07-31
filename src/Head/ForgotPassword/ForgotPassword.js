import React from 'react';

const ForgotPassword = () => {

    const handleSubmit = e => {
        alert("Password recovery mail has been sent to the registered email-id");
        // Backend request
        // to send email
    }

    return (
        <div 
        className="forgot-password-container" 
        id="forget-pass"
        >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label 
                    className="lead"
                    >
                        Enter Email-id for Password Recovery:
                    </label>
                    <input 
                    type="email" 
                    className="form-control"  
                    autoFocus
                    placeholder="Enter Email-id" 
                    required
                    // onChange={handleChange(name)}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Add Category</button>
            </form>
        </div>
    );
}

export default ForgotPassword;