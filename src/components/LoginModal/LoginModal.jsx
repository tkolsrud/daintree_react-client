import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

import styles from './LoginModal.module.css'

function LoginModal({ show, setShow }){
    const handleClose = () => setShow(false)
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <div className={styles.container}>
                <div className={styles.login}>
                    <p><Link className={styles.link} to='/login'>Login</Link> to view cart!</p> 
                </div>
                <div className={styles.signup}>
                    <p>New customer? Start <Link className={styles.link} to='/signup'>here</Link>!</p>
                </div>
            </div>
        </Modal>
    )
}

export default LoginModal