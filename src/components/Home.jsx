import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import Item from "./Item";
import  { productContext } from "./ProductContext";

const Home = () => { 
    let [products, setProducts] = useContext(productContext);
    let navigate = useNavigate();

    return (
        <div>
        <h1>Home</h1>
        {products.map(product => (
            <Item key={product.id} product={product} onClick={() => navigate(`/product/${product.id}`)} />
        ))}
        </div>
    )
}

export default Home;