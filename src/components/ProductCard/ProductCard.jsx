import { useState, useEffect } from 'react'
import Star from '../Star/Star'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import styles from './ProductCard.module.css'



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
                    <li>{product.brand}</li>
                    <li>${product.price}</li>
                    <li>{starRating}<FontAwesomeIcon icon={faStarHalfStroke}/> ({product.rating})
                    </li>
                </ul>
            </div>    
        </div>
    )
}

export default ProductCard