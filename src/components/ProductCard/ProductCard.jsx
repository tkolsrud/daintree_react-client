import './ProductCard.css'

function ProductCard({ product }){
    return (
        <div className='container'>
            <div>
                <img classname='thumbnail' src={product.thumbnail} alt={product.title} />
            </div>
            <p classname='product-title'>{product.title}</p>
            <p>{product.brand}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default ProductCard