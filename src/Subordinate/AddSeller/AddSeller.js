import React, {useState} from 'react';
import "./add_seller.css"

const AddSeller = () => {
    const [details, setDetails] = useState(
        { name:"", email:"", address:"", phone:"",  error:"", success:"" }
    );

    const handleChange = detail => e => {
        
        setDetails({...details, [detail]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Create Category
    }

    return (
        <div 
        className="add-seller-container" 
        id="add-seller"
        >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Name
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    autoFocus
                    placeholder="Enter Name" 
                    required
                    onChange={handleChange(details.name)}
                    />
                </div>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Email-Id
                    </label>
                    <input 
                    type="email"
                    className="form-control" 
                    placeholder="abc@nic.com" 
                    required
                    onChange={handleChange(details.email)}
                    />
                </div>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Address
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Address" 
                    required
                    onChange={handleChange(details.address)}
                    />
                </div>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Phone Number
                    </label>
                    <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="Enter Phone Number" 
                    required
                    onChange={handleChange(details.phone)}
                    />
                </div>
                
                <button type="submit" class="btn btn-primary">Add Seller</button>
            </form>
        </div>
    )
}

export default AddSeller;