
import Form from './Form';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Model structure for the client's create job post pop
// Contains Form.js
function FormModal (props){
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = (formData)=>{
        props.onFormSubmit(formData);
        handleClose();
    }
    

    return(

    <>
    <Button variant="primary" onClick={handleShow} className='mb-3'>
      Add a New task
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body> <Form onFormSubmit={handleFormSubmit} /> </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
)};

export default FormModal;