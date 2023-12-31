export default function Item({product, onClick}) {
    
    return (
        <div>
            <h5>{product.title}</h5>
            <img src={`${product.image}`} alt={product.title}  className="item-img" onClick={onClick}/>
        </div>
    )
}