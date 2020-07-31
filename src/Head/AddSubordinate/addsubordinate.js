import React from 'react';
import "./add_subordinate.css"

const AddSubordinate = ({}) => {

    // New States for subordinates?
    // onChange and onSubmit different?

    return (
        <div 
        className="add-subordinate-container" 
        id="add-subordinate"
        >
            <form >
                {/* Add onSubmit */}
                <div className="form-group">
                    <label htmlFor="" 
                    className="lead"
                    >
                        Name
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    autoFocus
                    placeholder="Enter name" 
                    required
                    // onChange={}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="" 
                    className="lead"
                    >
                        Email - id
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="abc@nicommerce.com" 
                    required
                    // onChange={}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="" 
                    className="lead"
                    >
                        State
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter state" 
                    required
                    // onChange={}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="" 
                    className="lead"
                    >
                        Region
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Region" 
                    required
                    // onChange={}
                    />
                </div>
                                
                <button 
                type="submit" 
                class="btn btn-primary"
                >
                    Add Subordinate
                </button>
            </form>
        </div>
    );
}

export default AddSubordinate;