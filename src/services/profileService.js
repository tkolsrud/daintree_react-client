import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getProfile() {
    try {
        const res = await fetch(`${BASE_URL}/user-profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`,
            }
        })
        const json = await res.json()
        console.log('profileService', json)
        if (json.err){
            throw new Error(json.err)
        } else {
            return json
        }
    } catch (err) {
        throw err
    }
}

async function addToCart(product) {
    try{
        const res = await fetch(`${BASE_URL}/add-to-cart`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const json = await res.json()
        console.log(json)
        if (json.err) throw new Error(json.err)
        else return json
    } catch (err) {
        throw err
    }
}

async function removeFromCart(id) {
    try {
        const res = await fetch(`${BASE_URL}/remove-from-cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
        })
        console.log(res)
        const json = await res.json()
        if (json.err) throw new Error(json.err)
        else return json
    } catch (err) {
        throw err
    }
}

async function createWishList(name, products) {
    try {
        const res = await fetch(`${BASE_URL}/create-wl`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: name, products: products})
        })
        const json = await res.json()
        if(json.err) throw new Error(json.err)
        else return json
    } catch (err) {
        throw err
    }
}

async function addToWishList(id, product) {
    try {
        const res = await fetch(`${BASE_URL}/add-product-wl`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ id, product })
        })
        const json = await res.json()
        if(json.err) throw new Error(json.err)
        else return json
    } catch (err) {
        throw err
    }
}

async function removeFromList(listId, prodId) {
    try {
        const res = await fetch(`${BASE_URL}/list/${listId}/remove-product-wl/${prodId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
        })
        const json = await res.json()
        if (json.err) throw new Error(json.err)
        else return json
    } catch (err) {
        throw err
    }
}

async function deleteWishList(id) {
    try {
        const res = await fetch(`${BASE_URL}/delete-wl/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
        })
        console.log(res)
        const json = await res.json()
        if (json.err) throw new Error(json.err)
        else return json
    } catch (err) {
        throw err
    }
}


export { 
    getProfile, 
    addToCart, 
    createWishList, 
    addToWishList, 
    removeFromCart, 
    deleteWishList,
    removeFromList 
}