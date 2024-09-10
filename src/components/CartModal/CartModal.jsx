import Modal from 'react-bootstrap/Modal'

import styles from './CartModal.module.css'

function CartModal({ show, setShow }){
    const handleClose = () => setShow(false)
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <div className={styles.container}>
                <p>Added to Cart!</p>
            </div>
        </Modal>
    )
}

export default CartModal