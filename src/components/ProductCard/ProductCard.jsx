function ProductCard({ product }){
    return (
        <div>
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.brand}</p>
        </div>
    )
}

export default ProductCard