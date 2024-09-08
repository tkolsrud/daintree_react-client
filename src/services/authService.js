import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/auth`

async function signup(user){
    try {
        const res = await fetch(`${BASE_URL}/SIGNUP`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(user),
        })
        const json = await res.json()
        
        if (json.err){
            throw new Error(json.err)
        }
        if (json.token) {
            tokenService.setToken(json.token)
        }
        return json.profile
    } catch (err) {
        throw err
    }
}

function getUser(){
    return tokenService.getUserFromToken()
}

function logout(){
    tokenService.removeToken()
}

async function login(credentials){
    try {
        const res = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(credentials),
        })
        const json = await res.json()

        if (json.err) {
            throw new Error(json.err)
        }
        if (json.token){
            tokenService.setToken(json.token)
        }
        return json.profile
    } catch (err) {
        throw err
    }
}

async function changePassword(credentials){
    try {
        const res = await fetch(`BASE_URL}/change-password`, {
            method: 'POST',
            headers: {
                'Conten-Type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`,
            },
            body: JSON.stringify(credentials),
        })
        const json = await res.json()
        if (json.token){
            tokenService.removeToken()
            tokenService.setToken(json.token)
        }
        if (json.err){
            throw new Error(json.err)
        }
    } catch (err) {
        throw err
    }
}

export { signup, getUser, logout, login, changePassword }