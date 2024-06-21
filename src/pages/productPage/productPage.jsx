import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";

export const ProductPage = () => {
    const{ productId } = useParams();
    const thisProduct = (PRODUCTS.find((prod) => prod.id === productId));

    return (
        <div>
            <h1>{thisProduct.productName}</h1>
            <p>Price: ${thisProduct.price}</p>
        </div>

    );
}
