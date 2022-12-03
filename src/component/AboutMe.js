
import React from 'react'
import { Layout } from './Layout'
import { Row, Container,Col } from 'react-bootstrap';
import my from "../asests/my.png";

export const AboutMe = () => {
  return (
    <Layout>
      <Container>
        <div class="" id="about">
          <h3 class="section-title">About Me</h3>
           
              
<Row>
  <Col md="6" className="md-3"><img src={my} width="40%"/></Col>
  <Col><h4 className='tColor py-5'>Hello,I'm <span className=" p1">Abishkar 
    rai</span> </h4>
    <p className='tColor'> I am a Front End Developer/Full Stack Developer with experiences in modern technologies such as React, JavaScript, JQuery, Figma, HTML5, CSS3, Bootstrap, Node.js and MongoDB.
      I am passionate about what i'm doing and see every task as challenge and an opportunity to get better.
    </p>
    <ul>
      
    <li><span class="p1">Name: </span><span class="tColor">Abishkar Rai</span></li>
    <li><span class="p1">Experience: </span><span class="tColor">Under one Year</span></li>
    <li><span class="p1">Residence: </span><span class="tColor">Sydney, Hursville</span></li>
    </ul>
    </Col>
</Row>

   </div> </Container>
    </Layout>
  )
}
