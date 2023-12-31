import { useParams } from "react-router-dom"
import { useContext } from "react"
import { productContext } from "./ProductContext"

export const Product = () => { 
    let { productId } = useParams();
    const [products] = useContext(productContext);
    let product = products.find(product => product.id === parseInt(productId));
    
    return (
        <div>
        <h1>Product</h1>
        <h2>{product.title}</h2>
        <img src={product.image} alt="Produc image" className="" />
        </div>
    )
}