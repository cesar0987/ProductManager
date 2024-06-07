import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductFind = () => {
    const [product, setProduct] = useState(null);
    const [id, setId] = useState(1);

    const { id: idParam } = useParams();
    if (idParam && idParam !== id) {
        setId(idParam);
    }
    const findProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://product-manager-backend.vercel.app/api/product/${id}`);
            setProduct(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Product Find</h1>
            <form onSubmit={findProduct}>
                <input type="text" inputMode="numeric" placeholder="Product ID" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                <button>Find</button>
            </form>
            {product && (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            )}
        </div>
    );


};
