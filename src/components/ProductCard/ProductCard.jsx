import styles from './ProductCard.module.css'

function ProductCard({ product }){
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.thumbnail} src={product.thumbnail} alt={product.title} />
            </div>
            <div className={styles.product_title_container}>
                <p className={styles.product_title}>{product.title}</p>
            </div>
            <div className={styles.product_info}>
                <p>{product.brand}</p>
                <p>${product.price}</p>
                <p>Rating: </p>
            </div>
        </div>
    )
}

export default ProductCard