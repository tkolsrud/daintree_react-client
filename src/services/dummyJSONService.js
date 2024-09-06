const BASE_URL = 'https://dummyjson.com/products'

async function fetchAllProducts(){
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data.products
}

async function fetchCategories(){
    const res = await fetch(`${BASE_URL}/categories`)
    const data = await res.json()
    return data
}

export { fetchAllProducts, fetchCategories }