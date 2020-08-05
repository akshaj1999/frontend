import React, {useState} from 'react';
import "./add_product.css"

const AddProduct = () => {
    const [product, setProduct] = useState(
        { name:"", category:"", mrp:"", selling_price:"",  error:"", success:"" }
    );

    const handleChange = detail => e => {
        
        setProduct({...product, [detail]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Create Category
    }

    return (
        <div 
        className="add-product-container" 
        id="add-product"
        >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Product Name
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    autoFocus
                    placeholder="For ex. Earthen Pot / Jute Textile" 
                    required
                    onChange={handleChange(product.name)}
                    />
                </div>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Maximum Retail Price
                    </label>
                    <input 
                    type="number" 
                    min="1"
                    max="1000000"
                    className="form-control" 
                    placeholder="Rs. 3000" 
                    required
                    onChange={handleChange(product.mrp)}
                    />
                </div>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Product Selling Price
                    </label>
                    <input 
                    type="number" 
                    min="1"
                    max="1000000"
                    className="form-control" 
                    placeholder="Rs. 2399" 
                    required
                    onChange={handleChange(product.selling_price)}
                    />
                </div>
                <div className="form-group">
                    <label
                    className="lead"
                    >
                        Select Category
                    </label>
                    <select class="custom-select custom-select-lg mb-3">
                        <option selected>Select Category</option>
                        <option value="paintings">Paintings</option>
                        <option value="handicrafts">Handicrafts</option>
                        <option value="clothes">Clothes</option>
                    </select>
                </div>
                
                <button type="submit" class="btn btn-primary">Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct;