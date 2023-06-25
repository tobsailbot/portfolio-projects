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

const iconSize:any = {
  width: "25px",
  height: "25px",
  color: 'rgb(175, 199, 223)',
};

export default function Home() {
  return (
    <div className='container text-light' style={{ maxWidth: '880px' }}>

      <br />

      <div className='rounded-card container-sm mt-5 p-2 border  border-dark rounded-4'>

        <div className='m-auto text-center' style={{ position: 'relative', top: '-50px', height: '115px' }}>
          <Image className='border border-5 border-secondary' width={150} src={profileImg} alt='Profile img' style={{ borderRadius: '100%', width: '150px', height: '150px' }} />
        </div>

        <h2 className='text-center'>
          TOBIAS PILARCHE
        </h2>

        <h5 className='text-center about'> DEV JR.</h5>

        <div className='p-2 mx-4 mt-3'>
          <p className='about'>
            Lorem ipsum dolor sit, dolem sitamet insuto del rpihguinty acame amet es amet consectetur adipisicing elit.Unde recusandae sunt laboriosam magni, eveniet ipsam quas hic aliquam repellendus cum sit voluptatem voluptas ea dolorem porro!
          </p>
        </div>

        <div className=' m-auto text-center pt-1'>
          <button className='btn p-0 btn-dark'><FontAwesomeIcon style={iconSize} icon={faLinkedin} /></button>
          &nbsp; &nbsp; &nbsp;
          <button className='btn p-0 btn-dark'><FontAwesomeIcon style={iconSize} icon={faGithub} /></button>
          &nbsp; &nbsp; &nbsp;
          <button className='btn p-0 btn-dark'><FontAwesomeIcon style={iconSize} icon={faEnvelope} /></button>
        </div>

        <div className='text-center mt-3 mb-3'>
          <i className='about'> tpilarche@gmail.com</i>
        </div>

      </div>

      <br />

      <div className='rounded-card container-sm mt-3 p-2 border  border-dark rounded-4'>

        <div className="mx-3">

          <h4 className='mt-3'><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} /> &nbsp;Projects</h4>

          <br />

          <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>
            <div className="row text-center m-auto py-3"><p className='m-0 p-0 h6'>DENTAL TURNO</p></div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{maxWidth:'350px'}}>
                <Image height={200} width={300} src={dentalImg} alt='Dental Turno' style={{ borderRadius: '20px', width:'100%', height:'100%'}} /> 
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                  <p className='about'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
                  </p>
                </div>
                <div className="row">
                  <p className='text-center'>
                    <img height={45} src="https://skillicons.dev/icons?i=angular,typescript,django,python&theme=dark" alt='Angular, TS, Django, Python' />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>
            <div className="row text-center m-auto py-3"><p className='m-0 p-0 h6'>E-COMMERCE</p></div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{maxWidth:'350px'}}>
                <Image height={200} width={300} src={ecommerceImg} alt='E-COMMERCE' style={{ borderRadius: '20px', width:'100%', height:'100%'}} /> 
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                  <p className='about'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
                  </p>
                </div>
                <div className="row">
                  <p className='text-center'>
                    <img height={45} src="https://skillicons.dev/icons?i=angular,wordpress,php,mysql&theme=dark" alt='Angular, Wordpress, php, mysql' />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />  

          <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>
            <div className="row text-center m-auto py-3"><p className='m-0 p-0 h6'>FULBOLISTA</p></div>
            <div className="row m-auto p-1">
              <div className="col-12 m-auto text-center py-2" style={{maxWidth:'350px'}}>
                <Image height={200} width={300} src={fulbolistaImg} alt='Fulbolista' style={{ borderRadius: '20px', width:'100%', height:'100%'}} /> 
              </div>
              <div className="col d-grid">
                <div className="row py-3">
                  <p className='about'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
                  </p>
                </div>
                <div className="row">
                  <p className='text-center'>
                    <img height={45} src="https://skillicons.dev/icons?i=firebase,react,js,bootstrap&theme=dark" alt='Firebase, React, Js,Bootstrap' />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

        </div>

      </div>

      <br />
      <div className="mx-4 border-top border-secondary"></div>
      <br />
      <br />

      <div className="mx-4">

        <h4><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faGraduationCap} /> &nbsp;Education</h4>
        <br />
        <p>
          - Universidad Nacional de Lanus
          - Técnico en Audiovisión (2017 - 2023)
        </p>

        <p>
          - Multiple courses and seminaries (2021 - Today)
        </p>

        <p>
          - Self-taught (2021 - Today)
        </p>

      </div>




      <br />



    </div>


  )
}
