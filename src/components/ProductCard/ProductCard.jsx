import './ProductCard.css'

function ProductCard({ product }){
    return (
        <div className='product-card-container'>
            <div>
                <img className='thumbnail' src={product.thumbnail} alt={product.title} />
            </div>
            <div>
                <p className='product-title'>{product.title}</p>
            </div>
            <p>{product.brand}</p>
            <p>${product.price}</p>
            <p>Rating: </p>
        </div>
    )
}

export default ProductCard