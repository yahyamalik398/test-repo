import { createContext,  useState, useEffect  } from "react";
import axios from "axios";


const productContext = createContext();

const ProductProvider = (props) => { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setProducts(response.data);
        })
    }, []);


    return (
   
        <productContext.Provider value={[products, setProducts]}>
            {props.children}
        </productContext.Provider>
    )
}


export { ProductProvider, productContext };