import Offcanvas from 'react-bootstrap/Offcanvas'

function Sidemenu({ categoryList, show, handleClose }){
    return (
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
    )
}

export default Sidemenu