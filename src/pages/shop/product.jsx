import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    {/*
        FIX URLS BEFORE FINAL GITHUB COMMIT 
        <Link to={`HCI-website/${props.data.id}`}>
        WILL LIKELY WORK
    */}
    return (
        <div className="product">
            <Link to={`${props.data.id}`}>
            <img src={productImage} />
            </Link>
            <div classname="description">
                <h3>
                    <Link to={`${props.data.id}`} style={{ textDecoration: "none", color: "grey" }}>
                    {productName}
                    </Link>
                </h3>
                <p> ${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}> 
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
         </div>
    );
};