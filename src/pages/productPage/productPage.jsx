import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./productPage.css"

export const ProductPage = () => {
    const{ productId } = useParams();
    const { addToCart, cartItems } = useContext(ShopContext);
    const { addToWish, wishItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[productId];
    const navigate = useNavigate();

    return (
        <div className="prod">
            {<img src = {PRODUCTS[productId-1].productImage} />}
            <div className="descript">
                <h1>{PRODUCTS[productId-1].productName}</h1>
                <p>Price: ${PRODUCTS[productId-1].price}</p>
                    <div class="button container">
                        <IconButton className="wishlist">
                            <FavoriteIcon onClick={() => addToWish(productId)} />
                        </IconButton>
                    <button className="addToCartBttn" onClick={() => addToCart(productId)}> 
                        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                    </button>
                    </div>
                </div>
                    <div className="about">
                         <h3>About</h3>
                         <p>Condition: <b>{PRODUCTS[productId-1].condition}</b></p>
                         <p>{PRODUCTS[productId-1].description}</p>
                    </div>
                 </div>

    );
}
