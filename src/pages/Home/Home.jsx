import { useState, useEffect } from "react"
import ProductList from "../../components/ProductList/ProductList"

import * as dummyJSONService from '../../services/dummyJSONService'

function Home(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const apiResponse = await dummyJSONService.fetchAllProducts()
            setProducts(apiResponse)
        }
        fetchProducts()
    }, [])


    return (
        <ProductList products={products} />
    )
}

export default Home