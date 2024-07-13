import React from "react"; 
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Heart } from 'phosphor-react';
import "./navbar.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
    return (
    <div className="navbar">
        <div className="links">
            <Link to="/HCI-website"> Shop </Link>
            <Link to="/HCI-website/wishlist">
                <Heart size={30} />
            </Link>
            <Link to="HCI-website/cart"> 
                <ShoppingCart size={35} />
            </Link>
            <Link to="HCI-website/profile">
                <IconButton className="account">
                    <AccountCircleIcon/>
                </IconButton>
            </Link>
        </div>
    </div>
    );
};