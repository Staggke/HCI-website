import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { WishItem } from "./wishlist-item.jsx";
import "./wishlist.css";

import { useNavigate } from 'react-router-dom';

export const Wishlist = () => {
    const { wishItems, getTotalWishAmount } = useContext(ShopContext);
    const totalWishAmount = getTotalWishAmount();
  

    const navigate = useNavigate();

    return (
        <div className="wish">
            <div> 
                <h1> Your Wishlist Items</h1>
            </div>
            
            <div className="wishItems">
                {PRODUCTS.map((product) => {
                    if (wishItems[product.id] !== 0) {
                        return <WishItem data={product}/>;
                    }
                })}
            </div>
            
            {totalWishAmount > 0 ? (
            <div className='checkoutW'>
                <button onClick={() => navigate("/HCI-website")}> Back to Shopping </button>
            </div>
            ) : ( 
            <h1 className='emptyWish'> Your Wishlist is Empty </h1>
            )}       
        </div>
    );
};
