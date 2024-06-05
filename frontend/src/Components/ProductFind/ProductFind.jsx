import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductFind = () => {
    const [product, setProduct] = useState(null); // Initialize as null to handle the state before a product is found
    const [id, setId] = useState(1);

    const { id: idParam } = useParams();
    if (idParam && idParam !== id) {
        setId(idParam);
    }

    const getProducts = () => {
        const url = "http://localhost:8000/api/product/";
        axios.get(url)
            .then((res) => {
                console.log(res);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getProducts();
    }
    , []); // Empty dependency array ensures this runs once when the component mounts

    const findProduct = (e) => {
        e.preventDefault();
        product.find((product) => {
            if (product._id === id) {
             setProduct(product);
            }
        }
        );

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


}
