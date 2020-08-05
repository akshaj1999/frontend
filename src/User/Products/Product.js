import React from "react";
import {Link} from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './product.css'

const Product = () => {
    const product = {
            name:"Hand crafted wooden elephant",
            img: "./images/img1.jpg", 
            mrp:799,
            selling_price:549
    }

    const handleAddProduct = e => {
        alert("Product Added to cart");
        e.stopPropagation()
    };

    return (
        <div className="text-center display-1" id="product-page-container">
            <img className="card-img-top" 
            src={require(`${product.img}`)} 
            alt={product.name}
            />
            <div className="">
                <h2 className="display-4">{product.name}</h2>
                <p className="text-muted display-4">Rs. <strike>{product.mrp}</strike>  <i>{product.selling_price}</i></p>
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

export default Product;