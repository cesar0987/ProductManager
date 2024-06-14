import { useEffect, useState } from "react";
import axios from 'axios';
import "./ProductMng.css";

export const ProductMng = () => {
    const [id, setId] = useState(null);

    const getProducts = () => {
        axios.get("http://localhost:8000/api/product/")
            .then((res) => {
                if (res.data.length > 0) {
                    setId(res.data.length + 1);
                } else {
                    setId(1);
                }
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getProducts();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    const createProduct = async (e) => {
        e.preventDefault();

        const title = e.target.titleProduct.value;
        const price = e.target.priceProduct.value;
        const description = e.target.descriptionProduct.value;

        const data = {
            title,
            price,
            description,
            id,
        };


        const url = "https://authors-lryr.onrender.com/api/product/new";
        try {
            const response = await axios.post(url, data, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={createProduct}>
                <input type="text" placeholder="Title" id="titleProduct" name="titleProduct" />
                <input type="number" placeholder="Price" id="priceProduct" name="priceProduct" />
                <input type="text" placeholder="Description" id="descriptionProduct" name="descriptionProduct" />
                <button>Create</button>
            </form>
        </>
    );
};
