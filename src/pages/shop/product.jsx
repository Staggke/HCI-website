import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { TextUnderline } from "phosphor-react";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    return (
        <div className="product">
            <Link to={`/${props.data.id}`}>
            <img src={productImage} />
            </Link>
            <div classname="description">
                <h3>
                    <Link to={`/${props.data.id}`} style={{ textDecoration: "none", color: "black" }}>
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