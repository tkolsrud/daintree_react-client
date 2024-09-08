import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Sidemenu from '../SideMenu/Sidemenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import * as dummyJSONService from '../../services/dummyJSONService'

import daintreeLogo from './nature.png'
import styles from './Navbar.module.css'

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

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className={styles.navbar}>
            <section className={styles.navbar_left}>
                <NavLink to='/'><img src={daintreeLogo} alt="daintree logo" className={styles.logo} /></NavLink>
                <FontAwesomeIcon icon={faBars} onClick={handleShow} className={styles.bars} />
                <Sidemenu categories={categories} show={show} handleClose={handleClose} />
            </section>
            <section className={styles.navbar_right}>
                <p className={styles.login}><NavLink to='/login'>Login</NavLink></p>
            </section>
        </div>
    )
}

export default Navbar