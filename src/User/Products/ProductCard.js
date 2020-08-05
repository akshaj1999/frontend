import React from 'react';
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./product_card.css"

const Product_card = ({name, img, mrp, selling_price}) => {

    const handleAddProduct = e => {
        alert("Product Added to cart");
        e.stopPropagation()
    };
    return (
        <div className="card" id="product-card">
            <img className="card-img-top" 
            src={require(`${img}`)} 
            alt={name}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Rs. <strike>{mrp}</strike>  <i>{selling_price}</i></p>
                <Link 
                to="#" 
                className="btn btn-primary" 
                onClick={handleAddProduct}
                >
                    <AddShoppingCartIcon/>
                </Link>
            </div>
        </div>
    );
}

export default Product_card;