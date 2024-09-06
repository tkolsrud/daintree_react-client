import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Sidemenu from '../SideMenu/Sidemenu'

import * as dummyJSONService from '../../services/dummyJSONService'

function Navbar(){
    const [categories, setCategories] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        const fetchCategories = async() => {
            const apiResponse = await dummyJSONService.fetchCategories()
            setCategories(apiResponse)
        }
        fetchCategories()
    }, [])

    const categoryList = categories.map((category, idx) => {
        return <li key={idx}>{category.name}</li>
    })

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <button onClick={handleShow}>Departments</button>
        <Sidemenu categoryList={categoryList} show={show} handleClose={handleClose} />
        <h1><NavLink to='/'>Daintree</NavLink></h1>
        <p><NavLink to='/login'>Login</NavLink></p>
        </>
    )
}

export default Navbar