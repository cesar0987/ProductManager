import "./ProductList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'


export const ProductList = () => {
    const [savedProducts, setSavedProducts] = useState([]);
    const url = "https://authors-lryr.onrender.com/api/product/";

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log(res);
                setSavedProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); // Empty dependency array ensures this runs once when the component mounts

    const navigate = useNavigate();
    return (
        <div>
            <h1>Product List</h1>
        
            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {savedProducts.map((product,index) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td><button onClick={() => navigate(`/product/${product.id}`)}>Edit</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
