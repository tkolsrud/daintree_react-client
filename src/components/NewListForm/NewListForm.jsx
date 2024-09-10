import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

import styles from './NewListForm.module.css'

function NewListForm({ show, setShow, submitNewList }) {
    const handleClose = () => setShow(false)

    return (
        
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton></Modal.Header>
                <div className={styles.container}>
                    <div className={styles.form_container}>
                    <form onSubmit={submitNewList}>
                        <div className={styles.inputs}>
                        <label htmlFor="name-input">List Name</label>
                        <input 
                            type="text" 
                            name="listName"
                            id="name-input"
                            placeholder="My new List"
                        />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={handleClose}>Cancel</button>
                    </div>
                </div>

            </Modal>
    )
}

export default NewListForm