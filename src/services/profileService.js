import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getProfile(){
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

export { getProfile }