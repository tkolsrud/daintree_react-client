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

async function fetchProductsByCategory(name){
    try {
        console.log('name', name)
        const res = await fetch(`${BASE_URL}/category/${name}`)
        const data = await res.json()
        console.log("data", data)
        return data.products
    } catch (err) {
        console.log(err)
    }
}

export { 
    fetchAllProducts, 
    fetchCategories, 
    fetchProductsByCategory, 
}