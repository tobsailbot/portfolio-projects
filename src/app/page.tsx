'use client';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import profileImg from './img/profile.png'
import dentalImg from './img/dental-turno.png'
import ecommerceImg from './img/ecommerce.png'
import fulbolistaImg from './img/peloturno.png'

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDivClick = () => {
    // Update the state to open the modal box
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Update the state to close the modal box
    setIsModalOpen(false);
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
              <div className='p-2 mx-5 mt-3 text-center'>
                <p className='about'>
                  Soy un desarrollador autodidacta de <i>Argentina</i> con pasión por crear soluciones web. <br />
                  He trabajado como freelancer en varios proyectos que tenían como objetivo resolver problemas del mundo real o facilitar el trabajo de otras personas.
                  Tengo experiencia en el desarrollo de aplicaciones fullstack desde cero y en su implementación en línea.
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
      
      {
      <div>
        <ModalBs
          title='DENTAL TURNO'
          description="Aplicación web para gestionar turnos dentales con un calendario integrado, fichero de pacientes y un odontograma interactivo."
          imgs={['/img/calendario.png','/img/ficha.png','/img/odontogram.png','/img/statistics.png']}
          url='https://dental-turno.web.app/'
        />
      </div>
    }

      <br />
      <br />

      <div className='rounded-card container-sm mt-3 p-2 border  border-dark rounded-4'>

        <div className="mx-3">
          {isEng ? (
            <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} />
              &nbsp; Projects
            </h4>
          ) :
            (
              <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} />
                &nbsp; Proyectos
              </h4>
            )
          }
          <br />

          <div onClick={handleDivClick} className='proj-card row border p-3 mx-1 border rounded-4 border-0'>
            <div className="row text-center m-auto py-3">
              <p className='m-0 p-0 h6' >
                <a className='link-offset-2' href="https://dental-turno.web.app/" target='_blank' style={{ color: 'inherit', textDecorationColor: 'grey' }}>
                  DENTAL TURNO
                </a>
              </p>
            </div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{ maxWidth: '350px' }}>
                <a href="https://dental-turno.web.app/" target='_blank'>
                  <Image height={200} width={300} src={dentalImg} alt='Dental Turno' style={{ borderRadius: '20px', width: '100%', height: '100%' }} />
                </a>
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                  {
                    isEng ? (
                      <p className='about'> A web app system for managing dental appointments with an integrated scheduler, patient profiles, and an interactive odontogram.</p>
                    ) :
                      (
                        <p className='about'> Un sistema de aplicación web para gestionar turnos dentales con un calendario integrado, fichero de pacientes y un odontograma interactivo.</p>
                      )
                  }
                </div>
                <div className="row align-items-center p-0 m-0 text-center justify-content-center" >
                  <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px' }}>
                    <img height={42} src="https://skillicons.dev/icons?i=angular,typescript,django,python&theme=dark" alt='Angular, TS, Django, Python' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>
            <div className="row text-center m-auto py-3">
              <p className='m-0 p-0 h6' >
                <a className='link-offset-2' href="https://tobsa.com.ar/" target='_blank' style={{ color: 'inherit', textDecorationColor: 'grey' }}>
                  E-COMMERCE
                </a>
              </p>
            </div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{ maxWidth: '350px' }}>
                <a href="https://tobsa.com.ar/" target='_blank'>
                  <Image height={200} width={300} src={ecommerceImg} alt='E-COMMERCE' style={{ borderRadius: '20px', width: '100%', height: '100%' }} />
                </a>
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                  {
                    isEng ? (
                      <p className='about'>
                        An store site for digital products. Built with WordPress plugins and an Angular microfrontend. Features a database, email delivery and downloads.
                      </p>
                    ) :
                      (
                        <p className='about'> Una tienda para productos digitales. Construido con plugins de WordPress y un microfrontend de Angular. Cuenta con una base de datos, entrega de correos electrónicos y descargas.</p>
                      )
                  }
                </div>
                <div className="row align-items-center p-0 m-0 text-center justify-content-center" >
                  <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px' }}>
                    <img height={42} src="https://skillicons.dev/icons?i=angular,wordpress,php,mysql&theme=dark" alt='Angular, Wordpress, php, mysql' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>
            <div className="row text-center m-auto py-3">
              <p className='m-0 p-0 h6' >
                <a className='link-offset-2' href="https://peloturno-e8bc6.web.app/" target='_blank' style={{ color: 'inherit', textDecorationColor: 'grey' }}>
                  FULBOLISTA
                </a>
              </p>
            </div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{ maxWidth: '350px' }}>
                <a href="https://peloturno-e8bc6.web.app/" target='_blank'>
                  <Image height={200} width={300} src={fulbolistaImg} alt='Fulbolista' style={{ borderRadius: '20px', width: '100%', height: '100%' }} />
                </a>
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                  {
                    isEng ? (
                      <p className='about'>
                        A website for organizing football matches, where a user creates a room and other players join. They can chat, choose teams and see their names.                     </p>
                    ) :
                      (
                        <p className='about'>Un sitio web para organizar partidos de fútbol, donde un usuario crea una sala y otros jugadores se unen. Pueden chatear, elegir equipos y ver sus nombres.</p>
                      )
                  }
                </div>
                <div className="row align-items-center p-0 m-0 text-center justify-content-center" >
                  <div style={{ backgroundColor: 'hsl(225, 22%, 18%)', width: 'auto', padding: '10px 22px 10px 22px', borderRadius: '12px' }}>
                    <img height={42} src="https://skillicons.dev/icons?i=firebase,react,js,bootstrap&theme=dark" alt='Firebase, React, Js,Bootstrap' style={{ width: 'auto' }} />
                  </div>
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
