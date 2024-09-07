import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

import * as dummyJSONService from '../../services/dummyJSONService'

import styles from './ProductList.module.css'

function ProductList(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const apiResponse = await dummyJSONService.fetchAllProducts()
            setProducts(apiResponse)
        }
        fetchProducts()
    }, [])

    const productList = products.map((product) => {
        return <ProductCard product={product} key={product.id} />
    })

    if (!productList) <h2>Loading...</h2>

    return (
        <main className={styles.container}>
            <div className={styles.productlist_container}>
                {productList}
            </div>
        </main>
    )
}

export default ProductList