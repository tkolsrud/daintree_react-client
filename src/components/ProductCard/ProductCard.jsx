import { useState, useEffect } from 'react'
import Star from '../Star/Star'
import styles from './ProductCard.module.css'
import HalfStar from '../HalfStar/HalfStar'



function ProductCard({ product, stars, setStars }){
    const [starRating, setStarRating] = useState([])
    
    useEffect(()=>{
        console.log(product.rating)
        makeIcons(product.rating)
        console.log('starRating', starRating)
    }, [])

    const makeIcons = async (num) => {
        const starArr = []
        for(let i=1; i < num; i++){
            starArr.push(<Star key={i}/>)
        }
        console.log('pushIcons', starArr)
        await setStarRating(starArr)

    }

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.thumbnail} src={product.thumbnail} alt={product.title} />
            </div>
            <div className={styles.product_title_container}>
                <p className={styles.product_title}>{product.title}</p>
            </div>
            <div className={styles.product_info}>
                <ul>
                    {product.brand ? (
                        <li>{product.brand}</li>
                    ) : (
                        <li>Daintree Fresh</li>
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