import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HalfStar from '../../components/HalfStar/HalfStar'
import Star from '../../components/Star/Star'

import styles from './ProductDetail.module.css'

function ProductDetail(){
    let { state } = useLocation()
    let product = state.product

    const [starRating, setStarRating] = useState([])
    
    useEffect(()=>{
        makeIcons(product.rating)
    }, [])

    const makeIcons = async (num) => {
        const starArr = []
        for(let i=1; i < num; i++){
            starArr.push(<Star key={i}/>)
        }
        await setStarRating(starArr)
    }

    // const addToCart = (product) => {

    // }

    return (
        <main className={styles.container}>
            <div className={styles.container_top}>
                <div className={styles.image}>
                    <img src={product.images[0]} alt={product.title} />
                </div>
                <div className={styles.title}>
                    <h1>{product.title}</h1>
                </div>
            </div>
            <div className={styles.container_bottom}>
                <div className={styles.price}>
                    <p>${product.price}</p>
                 </div>
                 <div className={styles.description}>
                    <p>{product.description}</p>
                 </div>
                 <div className={styles.rating}>
                    <p>{starRating}<HalfStar /> ({product.rating})</p>
                 </div>
            </div>

        </main>
    )
}

export default ProductDetail