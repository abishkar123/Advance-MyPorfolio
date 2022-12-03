import React from 'react'
import { Layout } from './Layout'
import { Row, Container,Col } from 'react-bootstrap';

export const Contact = () => {
  return (
    <Layout>
    <div>
        <div class="" id="contact">
                <h2 class="section-title">Contact Me</h2>
                </div>
<Container>
                <Row className="fa-2x py-5 text-center md-5">
                <p><i className="fa-solid fa-mobile text-body"></i>0416881277</p>
  <p><i class="fa-solid fa-envelope text-info"></i>raiabishkar0.5@gmail.com </p>
                 
          
                  <div class="contact__container d-flex justify-content-around  md-g md-6">
                    <form action="" class="contact__form">
                        <input type="text" placeholder="Name" class="contact__input"/>
                        <input type="mail" placeholder="Email" class="contact__input"/>
                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="button" value="Submit" class="button"/>
                    </form>
                </div>
  
                </Row>
                <div className=" d-flex justify-content-around pb- 6 contact rounded-9 py-4">
                <a href="https://www.facebook.com/IMAbishkarRai"> <i className="fa-brands fa-facebook text-Primar font-size-23px"></i></a>
      <a href="https://www.linkedin.com/in/abishkar-rai/"> <i className="fa-brands fa-linkedin text-primary"></i></a>
      <a href="https://www.instagram.com/iamabishkarrai/"><i className="fa-brands fa-square-instagram text-danger"></i></a>
      </div>
                </Container>
              
    </div>
    </Layout>
  )
}
