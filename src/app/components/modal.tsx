import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { faArrowUpRightFromSquare, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalBsProps {
    title:string;
    description: string;
    imgs: any;
    url: string;
    isOpen: boolean; // A function that returns a boolean
    setIsOpen: (value: boolean) => void; // A function to set isOpen value
}

const ModalBs = (props: ModalBsProps) => {
  const [show, setShow] = useState(false);


  const handleClose = () => {
    props.setIsOpen(false);
  };


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
        <Modal.Body className="mt-0 pt-0 pb-0">
        <p className='about text-center pb-2'>
          {props.description}
        </p>

          <Carousel>
            {props.imgs.map((imgUrl:any, index:any) => (
              <Carousel.Item key={index} className="px-3">
                <img
                  className="w-100 m-auto rounded-4 border"
                  src={imgUrl}
                  alt={`Slide ${index + 1}`}
                  style={{ borderRadius: '12px'}}
                />
                <Carousel.Caption className="about text-center m-auto w-75 mt-2" style={{maxWidth:'500px'}}>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          
        </Modal.Body>
        <p className='about text-center mb-3'>
          <Button variant="primary" href={props.url}target='_blank'>
            Ver proyecto <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </p>

      </Modal>
    </>
  );
};

export default ModalBs;