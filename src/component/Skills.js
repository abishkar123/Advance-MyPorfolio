import React from 'react'
import { Layout } from './Layout'
import { Row, Container,Col } from 'react-bootstrap';

export const Skills = () => {
  return (
    <Layout>
    <div>
        <Container>
                <div class="" id="skills">
                <h2 class="section-title">Skills</h2>

</div>
                <h3 class="skills__subtitle py-4">Profesional Skills</h3>
                <Row>
                    <Col md="6">      
                    <div>
                      <h3 class="skills__subtitle"> Front-end Profesional Skills</h3>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon text-warning'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon text-danger'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon text-warning' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint skills__icon text-success'></i>
                                <span class="skills__name">UX/UI</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__names">
                            <i class="fa-brands fa-react skills__icon text-primary"></i>
                                <span class="skills__name">REACT.JS</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__names">
                            <i class="fa-brands fa-figma skills__icon text-secondary"></i>
                                <span class="skills__name">Figma</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>

                        

                    </div>
                </Col>
                    <Col> <div>
                      <h3 class="skills__subtitle"> Back-end Profesional Skills</h3>
                        
                        
                        <div class="skills__data">
                            <div class="skills__names"><i class="fa-brands fa-node text-black skills__icon"></i>
                            
                                <span class="skills__name">NODE.JS</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__names"> <i class="fa-brands fa-php skills__icon text-success"></i> <span class="skills__name">PHP</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>

                        

                       

                        

                    </div>  </Col>
                </Row>

               
          
            </Container>
    </div>
    </Layout>
  )
}
