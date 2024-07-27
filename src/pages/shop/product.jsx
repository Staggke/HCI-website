import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Product = (props) => {
    const { id, productName, price, productImage, seller } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const { addToWish, wishItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    const wishItemAmount = wishItems[id]

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
                <p> ${price} </p>
            </div>
            <div class="button container">
                <IconButton className="wishlist">
                    <FavoriteIcon onClick={() => addToWish(id)} />
                </IconButton>
                <button className="addToCartBttn" onClick={() => addToCart(id)}> 
                    Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
         </div>
    );
};