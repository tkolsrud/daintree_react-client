import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

import * as dummyJSONService from '../../services/dummyJSONService'

function ProductList(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const apiResponse = await dummyJSONService.index()
            setProducts(apiResponse)
        }
        fetchProducts()
    }, [])

    const productList = products.map((product) => {
        return <ProductCard product={product} key={product.id} />
    })

    return (
        <main>
            <h1>Product List</h1>
            {productList}
        </main>


    )
}

export default ProductList