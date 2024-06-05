import "./ProductMng.css";
import axios from 'axios';
export const ProductMng = () => {

    const createProduct = (e) => {
        e.preventDefault();
        const title = e.target.titleProduct.value;
        const price = e.target.priceProduct.value;
        const description = e.target.descriptionProduct.value;
        const product = {title, price, description};

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