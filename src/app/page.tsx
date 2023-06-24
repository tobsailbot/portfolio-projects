import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import profileImg from './img/profile.png'
import dentalImg from './img/dental-turno.png'
import ecommerceImg from './img/ecommerce.png'
import fulbolistaImg from './img/peloturno.png'


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

    <h5 className='text-center about'> DEV JR. </h5>

    <div className='p-2 mx-4'>
      <p className='about'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.Unde recusandae sunt laboriosam magni, eveniet ipsam quas hic aliquam repellendus cum sit voluptatem voluptas ea dolorem porro! 
      </p>
    </div>


    <br />
    <br />
    <div className="mx-4 border-top border-secondary"></div>
    <br />
    <br />

    <div className="mx-4">

      <h4>Projects</h4>
      <br />

        <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>

          <div className="row text-center m-auto py-1"><p className='m-0 p-0'>DENTAL TURNO</p></div>

          <div className="row m-auto">

            <div className="col m-auto text-center py-2 ">
            <Image height={200} width={300} src={dentalImg} alt='Dental Turno' style={{borderRadius:'20px'}}/>            </div>
            <div className="col py-2">
              <p className='about'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, sint deserunt expedita ipsam distinctio error explicabo illum minima deleniti autem, officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
              </p>
            </div>

          </div>
        </div>
        <br />
        <br />

        <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>

          <div className="row text-center m-auto py-1"><p className='m-0 p-0'>E-COMMERCE</p></div>

          <div className="row m-auto ">

            <div className="col m-auto text-center py-2 ">
            <Image height={200} width={300} src={ecommerceImg} alt='Dental Turno' style={{borderRadius:'20px'}}/>            </div>
            <div className="col py-2">
              <p className='about'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, sint deserunt expedita ipsam distinctio error explicabo illum minima deleniti autem, officiis in magni labore consequuntur nemo dolores saepe, dignissimos quia?
              </p>
            </div>

          </div>
        </div>

        <br />
        <br />

        <div className='proj-card row border p-3 mx-1 border rounded-4 border-0'>

          <div className="row text-center m-auto py-1"><p className='m-0 p-0'>FULBOLISTA</p></div>

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
            <img src="https://skillicons.dev/icons?i=firebase,react,js,html,css&theme=dark" alt='Firebase, React, Js, Css, HTML'/>
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

      <h4>Education</h4>
      <br/>
      <br/>
      <br/>

    </div>


  </div>

  <br />



</div>


  )
}
