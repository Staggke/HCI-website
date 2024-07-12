import React from "react"; 
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Heart } from 'phosphor-react';
import "./navbar.css";

export const Navbar = () => {
    return (
    <div className="navbar">
        <div className="links">
            <Link to="/HCI-website"> Shop </Link>
            <Link to="/HCI-website/wishlist">
                <Heart size={25} />
            </Link>
            <Link to="HCI-website/cart"> 
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
    );
};