import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

interface ModalBsProps {
    btn_title:string;
    title:string;
    description: string;
    imgs: JSX.Element;
}

const ModalBs = (props: ModalBsProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.btn_title}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='about text-center'>
          {props.description}
        </p>
        <div className='text-center'>
          {props.imgs}
        </div>

        <Carousel>
          
          <Carousel.Item>
            <img
              className="w-100 px-2 m-auto"
              src='/img/calendario.png'
              alt="First slide"
              style={{ borderRadius: '12px'}}
            />
            <Carousel.Caption className="about text-center m-auto w-75" style={{maxWidth:'500px'}}>
              <i>
              Calendar for events with month, week and days selector
              </i>
            </Carousel.Caption>
          </Carousel.Item>
          

        </Carousel>

        </Modal.Body>

      </Modal>
    </>
  );
};

export default ModalBs;