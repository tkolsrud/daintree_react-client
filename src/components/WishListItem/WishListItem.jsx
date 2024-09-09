
import styles from './WishListItem.module.css'

function WishListItem({product}) {



    return (
        // <li>{product.title}</li>
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}><p>{product.title}</p></div>
                <div className={styles.price}><p>$ {product.price}</p></div>
            </div>
        </div>
    )
}

export default WishListItem