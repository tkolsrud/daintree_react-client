import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import * as dummyJSONService from '../../services/dummyJSONService'

function Navbar(){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async() => {
            const apiResponse = await dummyJSONService.fetchCategories()
            setCategories(apiResponse)
        }
        fetchCategories()
    }, [])

    return (
        <>
        <h1><NavLink to='/'>Daintree</NavLink></h1>
        <p><NavLink to='/login'>Login</NavLink></p>
        </>
    )
}

export default Navbar