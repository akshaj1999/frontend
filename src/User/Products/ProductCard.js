import React from 'react';
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./product_card.css"

const product_card = ({name, img, mrp, selling_price}) => {

    const handleAddProduct = e => {
        alert("Product Added to cart");
        e.stopPropagation()
    };
    return (
        <div class="card" id="product-card">
            <img class="card-img-top" 
            src={require(`${img}`)} 
            alt={name}
            />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Rs. <strike>{mrp}</strike>  <i>{selling_price}</i></p>
                <Link 
                to="#" 
                class="btn btn-primary" 
                onClick={handleAddProduct}
                >
                    <AddShoppingCartIcon/>
                </Link>
            </div>
        </div>
    );
}

export default product_card;