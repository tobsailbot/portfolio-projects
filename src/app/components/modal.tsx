import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { faArrowUpRightFromSquare, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalBsProps {
    title:string;
    description: string;
    imgs: any;
    url: string;
    isOpen:boolean;
}

const ModalBs = (props: ModalBsProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={props.isOpen}
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
        <p className='about text-center mb-4'>
          <Button variant="primary" href={props.url}target='_blank'>
            Ver proyecto <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </p>

          <Carousel>
            {props.imgs.map((imgUrl:any, index:any) => (
              <Carousel.Item key={index}>
                <img
                  className="w-100 px-2 m-auto"
                  src={imgUrl}
                  alt={`Slide ${index + 1}`}
                  style={{ borderRadius: '12px'}}
                />
                <Carousel.Caption className="about text-center m-auto w-75 mt-4" style={{maxWidth:'500px'}}>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>

      </Modal>
    </>
  );
};

export default ModalBs;