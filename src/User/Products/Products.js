import React from 'react';
import ProductCard from './ProductCard';
import "./products.css"

const Products = () => {
    const products_list = {
        products: [
        {
            name:"Hand crafted wooden elephant",
            img: "./images/img1.jpg", 
            mrp:799,
            selling_price:549
        },
        {
            name:"Hand crafted black wooden elephant",
            img: "./images/img2.jpg", 
            mrp:1499,
            selling_price:749
        },
        {
            name:"Handmade gudiya",
            img: "./images/img3.jpg", 
            mrp:599,
            selling_price:349
        },
        {
            name:"Hand crafted wooden elephant",
            img: "./images/img1.jpg", 
            mrp:799,
            selling_price:549
        },
        {
            name:"Hand crafted black wooden elephant",
            img: "./images/img2.jpg", 
            mrp:1499,
            selling_price:749
        },
        {
            name:"Handmade gudiya",
            img: "./images/img3.jpg", 
            mrp:599,
            selling_price:349
        },
        {
            name:"Hand crafted wooden elephant",
            img: "./images/img1.jpg", 
            mrp:799,
            selling_price:549
        },
        {
            name:"Hand crafted black wooden elephant",
            img: "./images/img2.jpg", 
            mrp:1499,
            selling_price:749
        },
        {
            name:"Handmade gudiya",
            img: "./images/img3.jpg", 
            mrp:599,
            selling_price:349
        },
        {
            name:"Hand crafted wooden elephant",
            img: "./images/img1.jpg", 
            mrp:799,
            selling_price:549
        },
        {
            name:"Hand crafted black wooden elephant",
            img: "./images/img2.jpg", 
            mrp:1499,
            selling_price:749
        },
        {
            name:"Handmade gudiya",
            img: "./images/img3.jpg", 
            mrp:599,
            selling_price:349
        }
    ]}

    const getProducts = products_list.products.map (product => (
        <ProductCard name={product.name} img={product.img} mrp={product.mrp} selling_price={product.selling_price} />
    ));

    return (
        <div 
        className="products-list-container"
        id="products-list"
        >
            <hr />
            {getProducts}
        </div>
    );

}

export default Products;