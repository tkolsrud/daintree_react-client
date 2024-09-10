import Modal from 'react-bootstrap/Modal'

import styles from './ListModal.module.css'

function ListModal({ show, setShow }){
    const handleClose = () => setShow(false)
    return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
            <Modal.Header closeButton></Modal.Header>
            <div className={styles.container}>
                <h1>Added to List!</h1>
            </div>
        </Modal>
    )
}

export default ListModal