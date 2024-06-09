import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";


export const ProductEdit = () => {
    const [editProduct, setEditProduct]=useState([]);
    console.log(useParams().id)
    const {id} = useParams();
    const navigate = useNavigate();
    const getEditProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/product/${id}`);
            setEditProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEditProduct();
    }
    ,[]);
    console.log("Este es el edit product:",editProduct);

    const deleteProduct = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/product/delete/${editProduct._id}`);
            console.log(response);
            navigate("/product/list");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Product Edit</h1>
            <button onClick={deleteProduct}>Delete</button>

        </div>
    );
}