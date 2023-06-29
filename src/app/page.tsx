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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const iconSize:any = {
  width: "25px",
  height: "25px",
  color: 'rgb(175, 199, 223)',
};

export default function Home() {

  const [isEng, setEngDisabled] = useState(true);

  const changeLang = () => {
    setEngDisabled(!isEng);
  };

  return (
    <div className='container text-light' style={{ maxWidth: '880px'}}>

      <br />
      <div className="row text-end justify-content-end m-0" style={{ zIndex:'999'}}>
        <div className="col-2 m-0 p-0" style={{ width: '60px'}}>
        <button disabled={isEng} className="btn btn-primary px-2" onClick={changeLang}  style={{ zIndex:'999'}}>Eng</button>
        </div>
        <div className="col-2 m-0 p-0" style={{ width: '60px'}}>
          <button disabled={!isEng}  className="btn btn-primary px-2" onClick={changeLang}  style={{ zIndex:'999'}}>Esp</button>
        </div>
      </div>

      <div className='rounded-card container-sm mt-4 p-2 border border-dark rounded-4'>

        <div className='m-auto text-center' style={{ position: 'relative', top: '-50px', height: '115px', width: 'min-content'}}>
          <Image className='border border-5 border-secondary' width={150} src={profileImg} alt='Profile img' style={{ borderRadius: '100%', width: '150px', height: '150px' }} />
        </div>

        <h2 className='text-center'>
          TOBIAS PILARCHE
        </h2>

        <h5 className='text-center about'>🌐 DEV JR.</h5>

        {
          isEng ?(
          <div className='p-2 mx-5 mt-3'>
            <p className='about'>
              I’m a self-taught developer from <i>Argentina</i> with a passion for creating web solutions. <br />
              I’ve worked as a freelancer on various projects that aimed to solve real-world problems or to facilitate the work of other people.
              I have experience in developing fullstack applications from scratch and deploying them online. 
            </p>
          </div>):
          (
            <div className='p-2 mx-5 mt-3'>
            <p className='about'>
            Soy un desarrollador autodidacta de <i>Argentina</i> con pasión por crear soluciones web. <br />
            He trabajado como freelancer en varios proyectos que tenían como objetivo resolver problemas del mundo real o facilitar el trabajo de otras personas.
            Tengo experiencia en el desarrollo de aplicaciones fullstack desde cero y en su implementación en línea.
            </p>
          </div>)
        }

        <div className=' m-auto text-center pt-1'>
          <button className='btn p-1 btn-dark'><FontAwesomeIcon style={iconSize} icon={faLinkedin} /></button>
          &nbsp; &nbsp; &nbsp;
          <button className='btn p-1 btn-dark'><FontAwesomeIcon style={iconSize} icon={faGithub} /></button>
          &nbsp; &nbsp; &nbsp;
          <button className='btn p-1 btn-dark'><FontAwesomeIcon style={iconSize} icon={faEnvelope} /></button>
        </div>
        <div className='text-center mt-3 mb-3'>
          <i className='about'>tpilarche@gmail.com</i>
        </div>
      </div>

      <br />
      <br />

      <div className='rounded-card container-sm mt-3 p-2 border  border-dark rounded-4'>

        <div className="mx-3">
           { isEng ? (
            <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} />
            &nbsp; Projects
            </h4>
           ):
           (
            <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} />
            &nbsp; Proyectos
            </h4>
           )
           }
          <br />

          <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>
            <div className="row text-center m-auto py-3">
            <p className='m-0 p-0 h6' >
                <a className='link-offset-2' href="https://dental-turno.web.app/" target='_blank' style={{color:'inherit',textDecorationColor: 'grey'}}>
                  DENTAL TURNO
                </a>
              </p>
              </div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{maxWidth:'350px'}}>
                <a href="https://dental-turno.web.app/" target='_blank'>
                  <Image height={200} width={300} src={dentalImg} alt='Dental Turno' style={{ borderRadius: '20px', width:'100%', height:'100%'}} /> 
                </a>
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                  {
                  isEng ?(
                  <p className='about'> A web app system for managing dental appointments with an integrated scheduler, patient profiles, and an interactive odontogram.</p>
                  ):
                  (
                  <p className='about'> Un sistema de aplicación web para gestionar turnos dentales con un calendario integrado, fichero de pacientes y un odontograma interactivo.</p>
                  )
                  }
                </div>
                <div className="row align-items-center p-0 m-0 text-center justify-content-center" >
                  <div style={{backgroundColor:'hsl(225, 22%, 18%)', width:'auto', padding:'10px 22px 10px 22px', borderRadius:'12px'}}>
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
              <a className='link-offset-2' href="https://tobsa.com.ar/" target='_blank' style={{color:'inherit',textDecorationColor: 'grey'}}>
                  E-COMMERCE
                </a>
              </p>
            </div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{maxWidth:'350px'}}>
                <a href="https://tobsa.com.ar/" target='_blank'>
                <Image height={200} width={300} src={ecommerceImg} alt='E-COMMERCE' style={{ borderRadius: '20px', width:'100%', height:'100%'}} /> 
                </a>
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                {
                  isEng ?(
                    <p className='about'>
                    An store site for digital products. Built with WordPress plugins and an Angular microfrontend. Features a database, email delivery and downloads.
                    </p>
                  ):
                  (
                  <p className='about'> Una tienda para productos digitales. Construido con plugins de WordPress y un microfrontend de Angular. Cuenta con una base de datos, entrega de correos electrónicos y descargas.</p>
                  )
                  }
                </div>
                <div className="row align-items-center p-0 m-0 text-center justify-content-center" >
                  <div style={{backgroundColor:'hsl(225, 22%, 18%)', width:'auto', padding:'10px 22px 10px 22px', borderRadius:'12px'}}>
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
              <a className='link-offset-2' href="https://peloturno-e8bc6.web.app/" target='_blank' style={{color:'inherit',textDecorationColor: 'grey'}}>
                  FULBOLISTA
                </a>
              </p>
            </div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{maxWidth:'350px'}}>
                <a href="https://peloturno-e8bc6.web.app/" target='_blank'>
                  <Image height={200} width={300} src={fulbolistaImg} alt='Fulbolista' style={{ borderRadius: '20px', width:'100%', height:'100%'}} /> 
                </a>
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                {
                  isEng ?(
                  <p className='about'>
                  A website for organizing football matches, where a user creates a room and other players join. They can chat, choose teams and see their names.                     </p>
                  ):
                  (
                  <p className='about'>Un sitio web para organizar partidos de fútbol, donde un usuario crea una sala y otros jugadores se unen. Pueden chatear, elegir equipos y ver sus nombres.</p>
                  )
                  }
                </div>
                <div className="row align-items-center p-0 m-0 text-center justify-content-center" >
                  <div style={{backgroundColor:'hsl(225, 22%, 18%)', width:'auto', padding:'10px 22px 10px 22px', borderRadius:'12px'}}>
                    <img height={42} src="https://skillicons.dev/icons?i=firebase,react,js,bootstrap&theme=dark" alt='Firebase, React, Js,Bootstrap' style={{width:'auto'}}/>
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

        { isEng ? (
              <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faWrench} />
              &nbsp; Skills
              </h4>
            ):
            (
              <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faWrench} />
              &nbsp; Habilidades
              </h4>
            )
          }
       <br />
        <div className="proj-card p-3 pb-1 ps-4 rounded-4">
          <h6>Languages</h6>
          <ul className='about'>
            <li>Javascript</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <br />

        <div className="proj-card p-3 pb-1 ps-4 rounded-4">
          <h6>Frameworks</h6>
          <ul className='about'>
            <li>Angular</li>
            <li>React</li>
            <li>Django</li>
            <li>Wordpress</li>
          </ul>
        </div>

        <br />

        <div className="proj-card p-3 pb-1 ps-4 rounded-4"> 
          <h6>Software</h6>
          <ul className='about'>
            <li>Adobe Premiere Pro</li>
            <li>Blender 3D</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>

        <br />

        </div>
      </div>

      <br />
      <br />

      <div className="rounded-card container-sm mt-3 p-2 border  border-dark rounded-4">

        <div className="mx-3">
          { isEng ? (
              <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faGraduationCap} />
              &nbsp; Education
              </h4>
            ):
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
              Bachelor's degree in Audiovisual Communication. &nbsp;&nbsp;&nbsp;&nbsp; (2017 - 2023)
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


    </div>


  )
}
