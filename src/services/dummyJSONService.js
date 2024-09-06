const BASE_URL = 'https://dummyjson.com/products'

async function index(){
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data.products
}

export { index }