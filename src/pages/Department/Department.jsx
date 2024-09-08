import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ProductList from "../../components/ProductList/ProductList"

import * as dummyJSONService from '../../services/dummyJSONService'

function Department(){
    const [products, setProducts] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const fetchProducts = async (name) => {
            const apiResponse = await dummyJSONService.fetchProductsByCategory(name)
            setProducts(apiResponse)
        }
        fetchProducts(name)
    }, [name])

    if(!products) return <h1>Loading...</h1>

    return (
        <>
            <h1>{name}</h1>
            <ProductList products={products} />
        </>
    )
}

export default Department