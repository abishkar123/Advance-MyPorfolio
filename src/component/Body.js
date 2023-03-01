import React from 'react'
import my from "../asests/my.png";
import { Layout } from './Layout';
import { TypeAnimation } from 'react-type-animation';
import CV from '../asests/resume.pdf'

export const Body = () => {

  return (
    <Layout>
    <div>
        <section class="home bd-grid" id="home">
                
                <div className="col-md-6 mt-3 pb-3">
                <h3> Hi i'm </h3>
                <div className="fs-1 fw-bolder mb-2"> <span class="">Abishkar Rai </span></div>
               
                <TypeAnimation
                className='fs-1 fw-bolder mb-2 home__title-color'
                sequence={[
                  'Full Stack Developer', 1000, 'Front-end Developer', 2000, 'Full Stack Developer|Front-end Develper', ()=>{
                    console.log('Abishkar rai')
                  }
                ]}
                wrapper="dev"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em' }}
                />
               
                <div>
                  <a href="https://www.linkedin.com/in/abishkar-rai/">
                <i className="fa-brands fa-linkedin text-danger"></i> </a>
                <a href="https://github.com/abishkar123?tab=repositories">
                <i className="fa-brands fa-github text-primary"></i></a>
                </div>
    
                <p>I am recently finished my BIT Program and i am currenly doing job ready program at dented code and i have Problem solving nature.</p>
                <a href={CV} download className='btn btn-danger'>Download Resume</a>
            {/* <Button className="btn btn-danger">Download Resume</Button> */}
            </div>
    
                    
    
                    <div class="home__img">
                        <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                                <img class="home__blob-img" x="40" y="10" src={my}/>
                            </g>
                        </svg>
                    </div>
                </section>
    
    </div>
    </Layout>
  )
}
