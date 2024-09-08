import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Star from '../Star/Star'
import styles from './ProductCard.module.css'
import HalfStar from '../HalfStar/HalfStar'



function ProductCard({ product }){
    const [starRating, setStarRating] = useState([])
    
    useEffect(()=>{
        makeIcons(product.rating)
    }, [])

    const makeIcons = async (num) => {
        const starArr = []
        for(let i=1; i < num; i++){
            starArr.push(<Star key={i}/>)
        }
        setStarRating(starArr)
    }

    return (
        <div className={styles.container}>
            <div>
                <Link to={`/product-info/${product.id}`}><img className={styles.thumbnail} src={product.thumbnail} alt={product.title} /></Link>
            </div>
            <div className={styles.product_title_container}>
                <Link to={`/product-info/${product.id}`} >    
                <p className={styles.product_title}>{product.title}</p>
                </Link>
            </div>
            <div className={styles.product_info}>
                <ul>
                    {product.brand ? (
                        <li>{product.brand}</li>
                    ) : (
                        <li>Daintree Basics</li>
                    )}
                    <li>${product.price}</li>
                    <li>{starRating}<HalfStar /> ({product.rating})
                    </li>
                </ul>
            </div>    
        </div>
    )
}

export default ProductCard