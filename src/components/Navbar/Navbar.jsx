import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'

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

    const categoryList = categories.map((category) => {
        return <li>{category.name}</li>
    })

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <button onClick={handleShow}>Departments</button>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Departments</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {categoryList}
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
        <h1><NavLink to='/'>Daintree</NavLink></h1>
        <p><NavLink to='/login'>Login</NavLink></p>
        </>
    )
}

export default Navbar