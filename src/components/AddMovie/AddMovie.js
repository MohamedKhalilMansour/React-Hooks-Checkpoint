import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddMovie({addNewMovie}) {
  const [show, setShow] = useState(false);
  const [inputs,setInputs] = useState({
    posterURL:"",
    rating : '',
    title : '',
    description : ''
  })

  const handleChange = (e) => {
    setInputs({...inputs , [e.target.name]:e.target.value})
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const handleAdd = () => {
    addNewMovie(inputs)
    handleClose()
  }



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                name = "posterURL"
                placeholder="image"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rate</Form.Label>
              <Form.Control
                name = "rating"
                placeholder="rate"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                name='title'
                placeholder="title"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                name='description'
                placeholder="description"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie