import React, { useContext } from 'react';
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./cart.css";


export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div> 
                <h1> Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>;
                    }
                })}
            </div>
            {totalAmount > 0 ? (
            <div className='checkout'>
                <p> Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/HCI-website")}> Continue Shopping </button>
                <Popup trigger={<button> Checkout </button>} position="right center"
                 modal nested>
                {
                    close => (
                    <div className="checkModal">
                        <IconButton className="checkClose" onClick={() => close()}>
                            <CancelOutlinedIcon />
                        </IconButton>
                        <div className="checkHeader"> Shipping </div>
                        <div className="checkContent">
                            <p>How do you want to recieve your package?</p>
                            <button onClick={() => close()}>
                                Ship to you
                            </button>
                            &emsp;
                            <button onClick={() => close()}>
                                Pickup
                            </button>
                        </div>
                    </div>
                    )
                }
                </Popup>
            </div>
            ) : ( 
            <h1 className='emptyCart'> Your Cart is Empty </h1>
            )}       
        </div>
    );
};
