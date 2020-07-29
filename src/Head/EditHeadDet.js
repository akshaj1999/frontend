import React from "react"

const EditHeadDet = ({details, handleChange, handleSubmit}) => {
    const {name, email} = details;
    return (
        <div className="details-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="edit-details" 
                    className="lead"
                    id="input-label"
                    >
                        Name:
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="edit-details" 
                    autoFocus
                    placeholder="Enter name" 
                    required
                    value={name}
                    onChange={handleChange("name")}
                    />
                </div>
                <div className="form-group">
                    <label for="edit-details" 
                    className="lead"
                    id="input-label"
                    >
                        Email:
                    </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="edit-details" 
                    autoFocus
                    placeholder="Enter email" 
                    required
                    value={email}
                    onChange={handleChange("email")}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
        </div>
    )
}

export default EditHeadDet ;