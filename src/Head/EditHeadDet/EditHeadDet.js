import React from "react"
import "./edit_head_det.css"

const EditHeadDet = ({details, handleChange, handleSubmit}) => {
    const {name, email, password} = details;
    return (
        <div className="details-container" id="edit-details-container">
            <form id="edit-head-detail-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="edit-details-name" 
                    className="lead"
                    >
                        Name:
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="edit-details-name" 
                    autoFocus
                    placeholder="Enter name" 
                    required
                    value={name}
                    onChange={handleChange("name")}
                    />
                </div>
                <div className="form-group">
                    <label for="edit-details-email" 
                    className="lead"
                    >
                        Email:
                    </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="edit-details-email" 
                    autoFocus
                    placeholder="Enter email" 
                    required
                    value={email}
                    onChange={handleChange("email")}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="login-password-input" className="lead">
                        Enter New Password:
                    </label>
                    <p 
                    className="text-muted lead"
                    >
                        (Please fill this field <strong>ONLY</strong> if you want to change the password)
                    </p>
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
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
        </div>
    )
}

export default EditHeadDet ;