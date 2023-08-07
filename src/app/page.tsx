'use client';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import profileImg from './img/profile.png'
import dentalImg from './img/dental-turno.png'
import ecommerceImg from './img/ecommerce.png'
import fulbolistaImg from './img/fulbolista.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef, useState } from 'react';

import ModalBs from './components/modal';

const iconSize: any = {
  width: "25px",
  height: "25px",
  color: 'rgb(175, 199, 223)',
};

export default function Home() {

  let isEng: any = true;

  function selectText(element: HTMLElement | null) {
    if (element) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(element);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }


  const selectMeRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    selectText(selectMeRef.current);
  };

  const [idioma, setIdioma] = useState('');

  useEffect(() => {
    const obtenerIdioma = () => {
      const idiomaNavegador = window.navigator.language;
      setIdioma(idiomaNavegador);
    };

    obtenerIdioma();
  }, []);

  //console.log(idioma); 
  if (idioma.substring(0, 2) === 'es') {
    isEng = false;
  }

  // cards hover effect
  const divRef = useRef(null);

  const handleMove = (event:any) => {
    let { clientX, clientY } = event;
    console.log(clientX);
    console.log(clientY);
  };

  useEffect(() => {
    //document.addEventListener('mousemove', handleMove);
    let cards = document.querySelectorAll(".proj-card");
    for (let card of Array.from(cards)) {
      if (card instanceof HTMLElement) {
          card.onmousemove = (e: any) => handleMove(e);
      }
  }
  });


  // modals data
  const modal: any = [
    {
      title: 'DENTAL TURNO',
      description: "Aplicación web para gestionar turnos dentales con un calendario integrado, fichero de pacientes y un odontograma interactivo.",
      imgs: ['/img/dental-turno/calendario.png', '/img/dental-turno/ficha.png', '/img/dental-turno/odontogram.png', '/img/dental-turno/statistics.png'],
      url: 'https://dental-turno.web.app/'
    },
    {
      title: 'E-COMMERCE',
      description: "Una tienda para productos digitales. Cuenta con una base de datos, entrega de correos electrónicos y descargas.",
      imgs: ['/img/e-commerce/home.png', '/img/e-commerce/productos.png', '/img/e-commerce/checkout.png',],
      url: "https://tobsa.com.ar/"
    },
    {
      title: 'FULBOLISTA',
      description: "Un sitio web para organizar partidos de fútbol. Los jugadores se unen, pueden chatear, elegir equipos y ver sus nombres.",
      imgs: ['/img/fulbolista/home.png', '/img/fulbolista/jugadores.png', '/img/fulbolista/posiciones.png', '/img/fulbolista/chat.png',],
      url: "http://fulbolista.vercel.app/"
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(modal[0]);

  const handleDivClick = (i: any) => {
    setModalData(modal[i]);
    setIsModalOpen(true);
  };


  return (
    <div className='container text-light' style={{ maxWidth: '880px' }}>

      <br />
      <br />

      <div className='rounded-card container-sm mt-4 p-2 border border-dark rounded-4'>

        <div className='m-auto text-center' style={{ position: 'relative', top: '-50px', height: '115px', width: 'min-content' }}>
          <Image className='border border-5' id='profile-img' width={150} src={profileImg} alt='Profile img' style={{ borderRadius: '100%', width: '150px', height: '150px' }} />
        </div>

        <h2 className='text-center'>
          TOBIAS PILARCHE
        </h2>

        <h5 className='text-center about'>🌐 Developer</h5>

        {
          isEng ? (
            <div className='p-2 mx-5 mt-3 text-center'>
              <p className='about'>
                I’m a self-taught developer from <i>Argentina</i> with a passion for creating web solutions. <br />
                I’ve worked as a freelancer on various projects that aimed to solve real-world problems or to facilitate the work of other people.
                I have experience in developing fullstack applications from scratch and deploying them online.
              </p>
            </div>) :
            (
              <div className='p-2  mt-3 m-auto text-center' style={{ maxWidth: '550px' }}>
                <p className='about'>
                  Soy un desarrollador autodidacta de <i>Argentina</i>.<br />
                  He trabajado en varios proyectos que tenían como objetivo resolver problemas del mundo real o facilitar el trabajo de otras personas.
                </p>
              </div>)
        }

        <div className=' m-auto text-center pt-1'>
          <a title='Linkedin' className='btn p-1 btn-dark' href={'https://www.linkedin.com/in/tobias-pilarche/'} target='_blank'><FontAwesomeIcon style={iconSize} icon={faLinkedin} /></a>
          &nbsp; &nbsp; &nbsp;
          <a title='Github' className='btn p-1 btn-dark' href={'https://github.com/tobsailbot?tab=repositories'} target='_blank'><FontAwesomeIcon style={iconSize} icon={faGithub} /></a>
          &nbsp; &nbsp; &nbsp;
          <button title='Email' className='btn p-1 btn-dark' onClick={handleClick}><FontAwesomeIcon style={iconSize} icon={faEnvelope} /></button>
          &nbsp; &nbsp; &nbsp;
          <a title='Curriculum' className='btn p-1 btn-dark about ' href="/files/CV-Tobias-Pilarche.pdf" download >CV</a>
        </div>
        <div className='text-center mt-3 mb-3'>
          <i className='about' id="selectme" ref={selectMeRef}>tpilarche@gmail.com</i>
        </div>
      </div>


      <br />
      <br />

      {
        <div>
          <ModalBs
            title={modalData?.title}
            description={modalData?.description}
            imgs={modalData?.imgs}
            url={modalData?.url}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />
        </div>
      }

      <div ref={divRef} id='proj' className='rounded-card container-sm mt-3 p-2 border border-dark rounded-4'>

        <div className="mx-3">

          <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} />
            &nbsp; Proyectos
          </h4>

          <br />

          <div onClick={() => handleDivClick(0)} className='proj-card row p-3 rounded-4 m-auto' style={{ maxWidth: '550px' }}>
            <div className="row text-center m-auto ">
              <p className='link-offset-2 fs-5'>
                DENTAL TURNO
              </p>
            </div>
            <div className="row m-auto p-1" style={{ maxWidth: '350px' }}>
              <Image className='p-0' height={200} width={300} src={dentalImg} alt='Dental Turno' style={{ borderRadius: '20px', width: '100%', height: '100%' }} />
              <div className="row align-items-center p-0 m-0 text-center justify-content-center mt-3" >
                <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px' }}>
                  <img height={42} src="https://skillicons.dev/icons?i=angular,typescript,django,python&theme=dark" alt='Angular, TS, Django, Python' />
                </div>
              </div>
            </div>
          </div>


          <br />
          <br />

          <div onClick={() => handleDivClick(1)} className='proj-card row p-3 rounded-4 m-auto' style={{ maxWidth: '550px' }}>
            <div className="row text-center m-auto ">
              <p className='link-offset-2 fs-5'>
                E-COMMERCE
              </p>
            </div>
            <div className="row m-auto p-1" style={{ maxWidth: '350px' }}>
              <Image className='p-0' height={200} width={300} src={ecommerceImg} alt='E-COMMERCE' style={{ borderRadius: '20px', width: '100%', height: '100%' }} />
              <div className="row align-items-center p-0 m-0 text-center justify-content-center mt-3" >
                <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px' }}>
                  <img height={42} src="https://skillicons.dev/icons?i=angular,wordpress,php,mysql&theme=dark" alt='Angular, Wordpress, php, mysql' />
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div onClick={() => handleDivClick(2)} className='proj-card row p-3 rounded-4 m-auto' style={{ maxWidth: '550px' }}>
            <div className="row text-center m-auto ">
              <p className='link-offset-2 fs-5'>
                FULBOLISTA
              </p>
            </div>
            <div className="row m-auto p-1" style={{ maxWidth: '350px' }}>
              <Image className='p-0' height={200} width={300} src={fulbolistaImg} alt='Fulbolista' style={{ borderRadius: '20px', width: '100%', height: '100%' }} />
              <div className="row align-items-center p-0 m-0 text-center justify-content-center mt-3" >
                <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px' }}>
                  <img height={42} src="https://skillicons.dev/icons?i=firebase,react,js,bootstrap&theme=dark" alt='Firebase, React, Js,Bootstrap' />
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

        </div>

      </div>

      <br />
      <br />

      <div className="rounded-card container-sm mt-3 p-2 border  border-dark rounded-4">
        <div className="mx-3">

          {isEng ? (
            <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faWrench} />
              &nbsp; Skills
            </h4>
          ) :
            (
              <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faWrench} />
                &nbsp; Habilidades
              </h4>
            )
          }

          <br />

          <div className="proj-card p-3 pb-1 ps-4 rounded-4 text-center">
            {isEng ? (
              <h6 className='m-0'>Languages</h6>
            ) :
              (
                <h6 className='m-0'>Lenguajes</h6>
              )
            }
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '80%' }}><b>Javascript</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '75%' }}><b>Python</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '89%' }}><b>HTML</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '80%' }}><b>CSS</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '65%' }}><b>SQL</b></div>
            </div>
          </div>

          <br />

          <div className="proj-card p-3 pb-1 ps-4 rounded-4 text-center">
            <h6 className='m-0'>Frameworks</h6>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '76%' }}><b>Angular</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '68%' }}><b>React</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '85%' }}><b>Django</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '75%' }}><b>NextJS</b></div>
            </div>
          </div>

          <br />

          <div className="proj-card p-3 pb-1 ps-4 rounded-4 text-center">
            {isEng ? (
              <h6 className='m-0'>Softwares (extra)</h6>
            ) :
              (
                <h6 className='m-0'>Programas (extra)</h6>
              )
            }
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '88%' }}><b>Adobe Premiere Pro</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '75%' }}><b>Blender 3D</b></div>
            </div>
            <div className="progress-bar row">
              <div className="skills bar" style={{ width: '83%' }}><b>Adobe Photoshop</b></div>
            </div>
          </div>

          <br />

        </div>
      </div>

      <br />
      <br />

      <div className="rounded-card container-sm mt-3 p-2 border  border-dark rounded-4">

        <div className="mx-3">
          {isEng ? (
            <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faGraduationCap} />
              &nbsp; Education
            </h4>
          ) :
            (
              <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faGraduationCap} />
                &nbsp; Educación
              </h4>
            )
          }

          <br />
          <div className="proj-card p-3 rounded-4 ">
            <h6>
              National University of Lanús
            </h6>
            <b>
              Bachelor&apos;s degree in Audiovisual Communication. &nbsp;&nbsp;&nbsp;&nbsp; (2017 - 2023)
            </b>
          </div>

          <br />

          <div className="proj-card p-3 rounded-4 ">
            <b>
              Self-taught UI / UX  &nbsp;&nbsp;&nbsp;&nbsp; (2021 - Today)
            </b>
          </div>

          <br />

          <div className="proj-card p-3 rounded-4 ">
            <b>
              Online courses and seminaries &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (2020 - Today)
            </b>
          </div>
          <br />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='text-center border-top border-secondary py-3 about'>
        <i>Created with NextJS by Vercel.</i>
      </div>

    </div>


  )
}
