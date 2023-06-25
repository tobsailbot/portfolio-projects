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

import faIcon from './icons/window-restore-solid.svg'

const iconSize = {
  width: "25px",
  height: "25px",
  color:'rgb(175, 199, 223)',
};

export default function Home() {
  return (
<div className='container text-light' style={{maxWidth:'880px'}}>

  <br />

  <div className='rounded-card container-sm mt-5 p-2 border  border-dark rounded-4'>

    <div className='m-auto text-center' style={{position:'relative',top:'-50px', height:'115px'}}>
      <Image className='border border-5 border-secondary' width={150} src={profileImg} alt='Profile img' style={{borderRadius:'100%', width:'150px', height:'150px'}}/>
    </div>

    <h2 className='text-center'>
      TOBIAS PILARCHE
    </h2>

    <h5 className='text-center about'> DEV JR.</h5>

    <div className='p-2 mx-4'>
      <p className='about'>
      Lorem ipsum dolor sit, dolem sitamet insuto del rpihguinty acame amet es amet consectetur adipisicing elit.Unde recusandae sunt laboriosam magni, eveniet ipsam quas hic aliquam repellendus cum sit voluptatem voluptas ea dolorem porro! 
      </p>
    </div>

    <div className=' m-auto text-center pt-2'>
      <button className='btn p-0 btn-dark'><FontAwesomeIcon style={iconSize} icon={faLinkedin} /></button>
      &nbsp; &nbsp; &nbsp;
      <button className='btn p-0 btn-dark'><FontAwesomeIcon style={iconSize} icon={faGithub} /></button>
      &nbsp; &nbsp; &nbsp; 
      <button className='btn p-0 btn-dark'><FontAwesomeIcon style={iconSize} icon={faEnvelope} /></button>
    </div>

    <div className='text-center mt-3'>
      <i className='about'> tpilarche@gmail.com</i>
    </div>

    <br />
    <div className="mx-4 border-top border-secondary"></div>
    <br />
    <br />

    <div className="mx-4">

      <h4><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faCode} /> &nbsp;Projects</h4>
      <br />

        <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>

          <div className="row text-center m-auto py-1 "><h6 className='m-0 p-0 '>DENTAL TURNO</h6></div>

          <div className="row m-auto">

            <div className="col m-auto text-center py-2 ">
            <Image height={200} width={300} src={dentalImg} alt='Dental Turno' style={{borderRadius:'20px'}}/>            </div>
            <div className="col py-2">
              <p className='about'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, sint deserunt expedita ipsam distinctio error explicabo illum minima deleniti autem, officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
              </p>
            </div>

          </div>

        <div className="row">
          <p className='text-center pt-1 mb-0'>
            <img src="https://skillicons.dev/icons?i=angular,typescript,django,python&theme=dark" alt='Angular, TS, Django, Python'/>
          </p>
        </div>

        </div>
        <br />
        <br />

        <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>

          <div className="row text-center m-auto py-1"><h6 className='m-0 p-0'>E-COMMERCE</h6></div>

          <div className="row m-auto ">

            <div className="col m-auto text-center py-2 ">
            <Image height={200} width={300} src={ecommerceImg} alt='Dental Turno' style={{borderRadius:'20px'}}/>            </div>
            <div className="col py-2">
              <p className='about'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, sint deserunt expedita ipsam distinctio error explicabo illum minima deleniti autem, officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
              </p>
            </div>

          </div>

          <div className="row">
          <p className='text-center pt-1 mb-0'>
            <img src="https://skillicons.dev/icons?i=angular,wordpress,php,mysql&theme=dark" alt='Firebase, React, Js, Css, HTML'/>
          </p>
        </div>

        </div>

        <br />
        <br />

        <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>

          <div className="row text-center m-auto py-1"><h6 className='m-0 p-0'>FULBOLISTA</h6></div>

          <div className="row m-auto">

            <div className="col m-auto text-center py-2 ">
              <Image height={200} width={300} src={fulbolistaImg} alt='Dental Turno' style={{borderRadius:'20px'}}/>
            </div>
            <div className="col py-2">
              <p className='about'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, sint deserunt expedita ipsam distinctio error explicabo illum minima deleniti autem, officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
              </p>
            </div>
          </div>

        <div className="row">
          <p className='text-center pt-1 mb-0'>
            <img src="https://skillicons.dev/icons?i=firebase,react,js,bootstrap&theme=dark" alt='Firebase, React, Js,Bootstrap'/>
          </p>
        </div>

        </div>
        <br/>
    </div>



    <br />
    <div className="mx-4 border-top border-secondary"></div>
    <br />
    <br />
        
    <div className="mx-4">

    <h4><FontAwesomeIcon className='align-top py-0' style={iconSize} icon={faGraduationCap} /> &nbsp;Education</h4>
      <br/>
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


  </div>

  <br />



</div>


  )
}
