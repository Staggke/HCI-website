import React from "react"; 
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Heart } from 'phosphor-react';
import SearchIcon from '@mui/icons-material/Search';
import "./navbar.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from "../pages/searchbar/searchbar";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
    <div className="navbar">
        <div className="search">
            <input type="text" id="bar" placeholder="Search for products..."/>
            <IconButton className="search.button" onClick={() => navigate("/HCI-website/1")}>
                <SearchIcon/>
            </IconButton>
        </div>
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