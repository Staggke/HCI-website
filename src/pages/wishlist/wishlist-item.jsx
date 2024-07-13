import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const WishItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { wishItems, addToWish, removeFromWish, updateWishItemCount } = useContext(ShopContext);

    return (
        <div className="wishItem"> 
            <img src={productImage} /> 
            <div className="description">
                <p>
                    <b> {productName} </b>
                </p>   
                <p> ${price}</p>
                <div className="countHandlerw">
                    <IconButton onClick={() => removeFromWish(id)} value={wishItems[id]} onChange={(e) => updateWishItemCount(Number(e.target.value), id)}>
                        <FavoriteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};