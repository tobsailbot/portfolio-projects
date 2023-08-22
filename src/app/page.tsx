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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef, useState } from 'react';
import engTranslations from './locales/en.json';
import espTranslations from './locales/es.json';

import ModalBs from './components/modal';

const currYear = new Date().getFullYear();

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


  const allCards: any = useRef(null);
  const selectMeRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    selectText(selectMeRef.current);
  };

  let [idioma, setIdioma] = useState(engTranslations);

  useEffect(() => {
    const obtenerIdioma = () => {
      const idiomaNavegador:string = window.navigator.language;
      console.log(idiomaNavegador);
      if (idiomaNavegador.substring(0, 2) == 'es'){
        setIdioma(espTranslations);
      }
    };
    obtenerIdioma();
  }, []);

  // cards hover effect
  const handleGradientMove = (event: any) => {
    const { currentTarget: target } = event;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };


  // cards hover effect
  const handleMove = (event: any) => {
    const cardContent = document.getElementsByClassName("card-content");

    for (let card of Array.from(cardContent)) {
      if (card instanceof HTMLElement) {

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    }
  };


  useEffect(() => {
    let cards = document.querySelectorAll(".div-card");

    for (let card of Array.from(cards)) {
      if (card instanceof HTMLElement) {
        card.onmousemove = (e: any) => handleGradientMove(e);
      }
    }


  });


  // modals data
  const modal: any = [
    {
      title: 'DENTAL TURNO',
      description: "Aplicación web para gestionar turnos dentales con un calendario integrado, fichero de pacientes y un odontograma interactivo.",
      imgs: ['/img/dental-turno/home.png', '/img/dental-turno/calendario.png', '/img/dental-turno/odontogram.png', '/img/dental-turno/statistics.png'],
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
    <div id='allCards' ref={allCards} onMouseMove={handleMove}>
      <div className='container text-light mt-3' style={{ maxWidth: '1000px' }}>
        <br />
        <br />
        <div className="card-content mt-4 container-sm rounded-4">
          <div className='rounded-card container-sm mt-0 p-2 rounded-4'>

            <div className='circle'></div>

            <Image id='profile-img' width={150} height={150} src={profileImg} alt='Profile img' />
            <div className="my-5 py-2"></div>
            <h2 className='text-center'>
              TOBIAS PILARCHE
            </h2>
            <h4 className='text-center subtitle mt-2'><FontAwesomeIcon icon={faGlobe} style={{ color: 'rgb(175, 199, 223)', }} width={20} /> Developer</h4>
              <div className='p-2  mt-3 m-auto text-center' style={{ maxWidth: '510px' }}>
                <p className='about' dangerouslySetInnerHTML={{ __html: idioma.about }}>
                </p>
              </div>
            <div className='m-auto text-center pt-1'>
              <a title='Linkedin' className='btn p-1 btn-dark' href={'https://www.linkedin.com/in/tobias-pilarche/'} target='_blank'><FontAwesomeIcon style={iconSize} icon={faLinkedin} /></a>
              &nbsp; &nbsp; &nbsp;
              <a title='Github' className='btn p-1 btn-dark' href={'https://github.com/tobsailbot?tab=repositories'} target='_blank'><FontAwesomeIcon style={iconSize} icon={faGithub} /></a>
              &nbsp; &nbsp; &nbsp;
              <button title='Email' className='btn p-1 btn-dark' onClick={handleClick}><FontAwesomeIcon style={iconSize} icon={faEnvelope} /></button>
              &nbsp; &nbsp; &nbsp;
              <a title='Curriculum' style={{width:'35px', height:'39px'}} className='d-inline px-1 btn about btn-dark fs-5' href="/files/CV-Tobias-Pilarche.pdf" download >CV</a>
            </div>
            <div className='text-center mt-3 mb-3'>
              <i className='about' id="selectme" ref={selectMeRef}>tpilarche@gmail.com</i>
            </div>
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
        <div className="card-content mt-3 container-sm rounded-4">
          <div className='rounded-card container-sm  p-2 rounded-4'>
            <div className="mx-3">
              <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} />
                &nbsp; {idioma.titles[0]}
              </h4>
              <br />
              <div onClick={() => handleDivClick(0)} className='div-card proj row p-3 rounded-4 m-auto' style={{ maxWidth: '550px' }}>
                <div className="row text-center m-auto ">
                  <p className='link-offset-2 fs-5'>
                    DENTAL TURNO
                  </p>
                </div>
                <div className="row m-auto p-1" style={{ maxWidth: '350px' }}>
                  <Image className='p-0' height={200} width={300} src={dentalImg} alt='Dental Turno' style={{ borderRadius: '20px', width: '100%', height: '100%', zIndex: '999' }} />
                  <div className="row align-items-center p-0 m-0 text-center justify-content-center mt-3" >
                    <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px', zIndex: '999' }}>
                      <img height={42} src="https://skillicons.dev/icons?i=angular,typescript,django,python&theme=dark" alt='Angular, TS, Django, Python' />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div onClick={() => handleDivClick(1)} className='div-card proj row p-3 rounded-4 m-auto' style={{ maxWidth: '550px' }}>
                <div className="row text-center m-auto ">
                  <p className='link-offset-2 fs-5'>
                    E-COMMERCE
                  </p>
                </div>
                <div className="row m-auto p-1" style={{ maxWidth: '350px' }}>
                  <Image className='p-0' height={200} width={300} src={ecommerceImg} alt='E-COMMERCE' style={{ borderRadius: '20px', width: '100%', height: '100%', zIndex: '999' }} />
                  <div className="row align-items-center p-0 m-0 text-center justify-content-center mt-3" >
                    <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px', zIndex: '999' }}>
                      <img height={42} src="https://skillicons.dev/icons?i=angular,wordpress,php,mysql&theme=dark" alt='Angular, Wordpress, php, mysql' />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div onClick={() => handleDivClick(2)} className='div-card proj row p-3 rounded-4 m-auto' style={{ maxWidth: '550px' }}>
                <div className="row text-center m-auto ">
                  <p className='link-offset-2 fs-5'>
                    FULBOLISTA
                  </p>
                </div>
                <div className="row m-auto p-1" style={{ maxWidth: '350px' }}>
                  <Image className='p-0' height={200} width={300} src={fulbolistaImg} alt='Fulbolista' style={{ borderRadius: '20px', width: '100%', height: '100%', zIndex: '999' }} />
                  <div className="row align-items-center p-0 m-0 text-center justify-content-center mt-3" >
                    <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px', zIndex: '999' }}>
                      <img height={42} src="https://skillicons.dev/icons?i=firebase,react,js,bootstrap&theme=dark" alt='Firebase, React, Js,Bootstrap' />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='card-content container-sm rounded-4 mt-3'>
          <div className="rounded-card container-sm p-2 rounded-4">
            <div className="mx-3">
                <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faWrench} />
                  &nbsp; {idioma.titles[1]}
                </h4>
              <br />
              <div className="div-card p-3 pb-1 ps-4 rounded-4 text-center">
                  <h6 className='m-0'>{idioma.titles[2]}</h6>
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
              <div className="div-card p-3 pb-1 ps-4 rounded-4 text-center">
                <h6 className='m-0'>{idioma.titles[2]}</h6>
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
              <div className="div-card p-3 pb-1 ps-4 rounded-4 text-center">
                  <h6 className='m-0'>{idioma.titles[2]}</h6>
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
        </div>
        <br />
        <br />
        <div className="card-content container-sm rounded-4 mt-3">
          <div className="rounded-card container-sm p-2 rounded-4">
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
              <div className="div-card p-3 rounded-4 ">
                <h6>
                  National University of Lanús
                </h6>
                <b>
                  Bachelor&apos;s degree in Audiovisual Communication. &nbsp;&nbsp;&nbsp;&nbsp; (2017 - 2023)
                </b>
              </div>
              <br />
              <div className="div-card p-3 rounded-4 ">
                <b>
                  Self-taught UI / UX  &nbsp;&nbsp;&nbsp;&nbsp; (2021 - Today)
                </b>
              </div>
              <br />
              <div className="div-card p-3 rounded-4 ">
                <b>
                  Online courses and seminaries &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (2020 - Today)
                </b>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <div className='text-center py-2 text-secondary'>
          © {currYear} Tobias Pilarche - Digital Portfolio
        </div>
      </div>
    </div>


  )
}
