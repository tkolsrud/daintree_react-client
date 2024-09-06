function ProductCard({ product }){
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.brand}</p>
        </div>
    )
}

export default ProductCard