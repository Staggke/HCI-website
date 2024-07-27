import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentNeutralSharpIcon from '@mui/icons-material/SentimentNeutralSharp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SendIcon from '@mui/icons-material/Send';
import { Star } from "phosphor-react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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
                <h1 style={{color: "grey"}}>{PRODUCTS[productId-1].productName}</h1>
                <p>Price: ${PRODUCTS[productId-1].price}</p>
                <div className="sellerLink">
                <Link to={`${PRODUCTS[productId-1].seller}`}  style={{ textDecoration: "none", color: "grey" }}>
                    {PRODUCTS[productId-1].seller} <Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star/>
                </Link>
                </div>
                </div>
                    <div class="buttonContainer">
                        <IconButton className="wishlist">
                            <FavoriteIcon onClick={() => addToWish(productId)} />
                        </IconButton>
                    <button className="addToCartBttn" onClick={() => addToCart(productId)}> 
                        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                    </button>
                    <Popup trigger={<button className="offerTrigger"> Make an offer </button>} position="right center"
                    modal nested>
                    {
                        close => (
                        <div className="offerModal">
                            <IconButton className="offerClose" onClick={() => close()}>
                            <CancelOutlinedIcon />
                            </IconButton>
                            <div className="offerHeader"> Make an offer </div>
                            <div className="offerContent">
                                <input className="offer" type="number" placeholder="Your offer" />  &ensp;
                                <IconButton className="offerButton" onClick={() => close()}>
                                    <SendIcon />
                                </IconButton>
                            </div>
                        </div>
                    )
                    }
                    </Popup>
                </div>
                
                    {PRODUCTS[productId-1].stock == 0 ? (
                        <div className="noStock">
                             <Popup trigger={<button> Out of stock </button>} position="right center"
                    modal nested>
                    {
                        close => (
                        <div className="stockModal">
                            <IconButton className="stockClose" onClick={() => close()}>
                            <CancelOutlinedIcon />
                            </IconButton>
                            <div className="stockHeader"> Want to be notified when this product is back in stock? </div>
                            <div className="stockContent">
                                <input className="stock" type="text" placeholder="Enter your email" />  &ensp;
                                <button className="stockButton" onClick={() => close()}>
                                    Notify me
                                </button>
                            </div>
                        </div>
                    )
                    }
                    </Popup>
                        </div>
                    ):(
                        <div className="stock">
                            <p><b> {PRODUCTS[productId-1].stock} </b> left in stock</p>
                        </div>
                    )
                } 
            
                <div className="about">
                    <h3>About</h3>
                    <p>Condition: <b>{PRODUCTS[productId-1].condition}</b></p>
                    <p>{PRODUCTS[productId-1].description}</p>
                </div>
                <hr></hr>
            <div className="Comments">
                <h2 className="heading"> Comments </h2>
                <div className="comment">
                    <div className="commenter">
                        <EmojiEmotionsIcon /> <b> Anonymous </b> 
                        <Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star size={15}/>
                    </div>
                    <div className="commentContent">
                        <p> {PRODUCTS[productId-1].comment1} </p>
                    </div>
                </div>
                <div className="comment">
                    <div className="commenter">
                        <SentimentNeutralSharpIcon /> <b> Anonymous </b> 
                        <Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star size={15}/><Star size={15}/><Star size={15}/>
                    </div>
                    <div className="commentContent">
                        <p> {PRODUCTS[productId-1].comment2} </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
