import React, { createContext, useState } from "react";
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i < PRODUCTS.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const getDefaultWish = () => {
    let wish = {};
    for (let j=1; j < PRODUCTS.length +1; j++) {
        wish[j] = 0;
    }
    return wish;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishItems, setWishItems] = useState(getDefaultWish());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
               let itemInfo = PRODUCTS.find((product) => product.id === Number(item));  
               totalAmount += cartItems[item] * itemInfo.price; 
            }
        }

        return totalAmount;
    }

    const getTotalWishAmount = () => {
        let totalWishAmount = 0;
        for (const itemW in wishItems) {
            if (wishItems[itemW] > 0) {
               let itemInfoW = PRODUCTS.find((product) => product.id === Number(itemW));  
               totalWishAmount += wishItems[itemW] * itemInfoW.price; 
            }
        }

        return totalWishAmount;
    }


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    
    const addToWish = (itemId) => {
        setWishItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const removeFromWish = (itemId) => {
        setWishItems((prev) => ({...prev, [itemId]: prev[itemId - 1]}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const updateWishItemCount = (newAmountW, itemId) => {
        setWishItems((prev) => ({...prev, [itemId]: newAmountW}));
    }

    const contextValue = { 
        cartItems, 
        wishItems,
        addToCart, 
        addToWish,
        removeFromCart, 
        removeFromWish,
        updateCartItemCount,
        updateWishItemCount,
        getTotalCartAmount, 
        getTotalWishAmount
    };

    return ( 
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    );
};