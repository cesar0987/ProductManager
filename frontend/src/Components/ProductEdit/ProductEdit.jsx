import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

export const ProductEdit = () => {
    const [editProduct, setEditProduct]=useState([]);
    const productID=useParams();

    useEffect(() => {
        try {
            const response=axios.get(`https://product-manager-backend.vercel.app/api/product/${productID}`);
            setEditProduct(response.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    , [productID]);
    return (
        <div>
            <h1>Product Edit</h1>
            <form>
                <input type="text" placeholder="Title" id="titleProduct" name="titleProduct" value={editProduct.title}/>
                <input type="text" placeholder="Price" id="priceProduct" name="priceProduct" value={editProduct.price}/>
                <input type="text" placeholder="Description" id="descriptionProduct" name="descriptionProduct" value={editProduct.description}/>
                <button>Update</button>
            </form>
        </div>
    );
}