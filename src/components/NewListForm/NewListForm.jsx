import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

function NewListForm({ show, handleClose, setShow, submitNewList }) {

    return (
        
            <Modal show={show} onHide={handleClose} size='lg' centered>
                <Modal.Header closeButton></Modal.Header>
                <section>
                    <form onSubmit={submitNewList}>
                        <label htmlFor="name-input">List Name</label>
                        <input 
                            type="text" 
                            name="listName"
                            id="name-input"
                            placeholder="My new List"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </section>

                <button onClick={handleClose}>close</button>
            </Modal>
    )
}

export default NewListForm