import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom'

import styles from './Sidemenu.module.css'

function Sidemenu({ categories, show, handleClose }){

    const categoryList = categories.map((category, idx) => {
        return <NavLink to={`/dept/${category.slug}`} key={idx}>
            <li onClick={handleClose} className={styles.category_name}>{category.name}</li>
            </NavLink>
    })

    return (
        <Offcanvas className={styles.sidemenu_container} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className={styles.title}>Shop By Department</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {categoryList}
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidemenu