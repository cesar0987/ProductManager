import "./ProductList.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const ProductList = () => {
    const [savedProducts, setSavedProducts] = useState([]);
    const url = "http://localhost:8000/api/product/";

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
                        <th>Product Id</th>
                    </tr>
                </thead>
                <tbody>
                    {savedProducts.map((product,index) => (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product._id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
