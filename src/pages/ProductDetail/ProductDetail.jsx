import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HalfStar from '../../components/HalfStar/HalfStar'
import Star from '../../components/Star/Star'

import * as profileService from '../../services/profileService'
import * as dummyJSONService from '../../services/dummyJSONService'

import styles from './ProductDetail.module.css'

function ProductDetail({ setProfile }){
    let { id } = useParams()
   
    const [starRating, setStarRating] = useState([])
    const [product, setProduct] = useState({})

    const navigate = useNavigate()
    
    useEffect(()=>{
        async function oragnizeState(id){
            await fetchProduct(id)
        }
        oragnizeState(id)        
    }, [])
    
    const fetchProduct = async(id) => {
        const apiResponse = await dummyJSONService.fetchOneProduct(id)
        setProduct(apiResponse)
        makeIcons(apiResponse.rating)
    }

    const makeIcons = (num) => {
        const starArr = []
        for(let i=1; i < num; i++){
            starArr.push(<Star key={i}/>)
        }
        setStarRating(starArr)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const productData = {
            apiId: product.id,
            title: product.title,
            description: product.description,
            brand: product.brand,
            price: product.price,
            tags: product.tags,
            thumbnail: product.thumbnail
        }

        if(!productData.brand) productData.brand = 'Daintree Basics'
        await setProfile(await profileService.addToCart(productData))
        navigate('/profile')
    }

    if(!product.images || !starRating.length){
        return <h1>Loading...</h1>
    } else {

    return (
        <main className={styles.container}>
            <div className={styles.container_top}>
                <div className={styles.image}>
                    <img src={product.images[0]} alt={product.title} />
                </div>
                <div className={styles.title}>
                    <h1>{product.title}</h1>
                </div>
                <div className={styles.brand}>
                    {!product.brand ? <p>Daintree Basics</p> : <p>{product.brand}</p>}
                </div>
            </div>
            <div className={styles.container_bottom}>
                <div className={styles.price}>
                    <p>$ {product.price}</p>
                 </div>
                 <div className={styles.description}>
                    <p>{product.description}</p>
                 </div>
                 <div className={styles.rating}>
                    <p>{starRating}<HalfStar /> ({product.rating})</p>
                 </div>
            </div>
            <button onClick={handleSubmit}>Add to Cart</button>
        </main>
    )
}
}
export default ProductDetail