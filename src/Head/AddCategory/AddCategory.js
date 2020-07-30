import React, {useState} from 'react';
import "./add_category.css"

const AddCategory = () => {
    const [category, setCategory] = useState(
        { name:"", error:"", success:"" }
    );
    
    const {name, error, success} = category;

    const handleChange = detail => e => {
        e.preventDefault();
        setCategory({...category, [detail]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Create Category
    }

    return (
        <div 
        className="add-category-container" 
        id="add-category"
        >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category-name" 
                    className="lead"
                    id="input-label"
                    >
                        Category Name
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="category-name" 
                    autoFocus
                    placeholder="For ex. Earthenware / Jute Handicraft" 
                    required
                    onChange={handleChange(name)}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Add Category</button>
            </form>
        </div>
    )
}

export default AddCategory;