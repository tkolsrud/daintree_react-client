import Modal from 'react-bootstrap/Modal'

import styles from './LoginModal.module.css'

function LoginModal({ show, setShow }){
    const handleClose = () => setShow(false)
    return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
            <Modal.Header closeButton></Modal.Header>
            <div className={styles.container}>
                <h1>Login Modal</h1>
            </div>
        </Modal>
    )
}

export default LoginModal