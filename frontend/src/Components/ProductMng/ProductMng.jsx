import { useEffect } from "react";
import "./ProductMng.css";
import axios from 'axios';
import { useState } from "react";
export const ProductMng = () => {
    const [id , setId] = useState(null);
    const getProducts = () => {

        axios.get("http://localhost:8000/api/product/")
        .then((res) => {
            if(res.data.length > 0){
                setId(res.data.length+1)
                console.log(id)
            }else{
                setId(1)
            }
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        }
        )
        }

    useEffect(() => {
        getProducts();
    }
    , []); // Empty dependency array ensures this runs once when the component mounts
  

    const createProduct = (e) => {
        const title = e.target.titleProduct.value;
        const price = e.target.priceProduct.value;
        const description = e.target.descriptionProduct.value;
        const product = {title, price, description,id};

        const url = "http://localhost:8000/api/product/new";
        axios.post(url, product)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
        <form onSubmit={createProduct}>
        <input type="text" placeholder="Title" id="titleProduct" name="titleProduct"/>
        <input type="number" placeholder="Price" id="priceProduct" name="priceProduct"/>
        <input type="text" placeholder="Description" id="descriptionProduct" name="descriptionProduct"/>
        <button>Create</button>
        </form>
        </>
    )

    

}