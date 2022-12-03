import React from 'react'
import { Layout } from './Layout'
import project1 from "../asests/project1.JPG"
import project2 from "../asests/project2.JPG";
import project3 from "../asests/project3.png";
import project4 from "../asests/project4.png";
import project5 from "../asests/project5.png";

export const Projects = () => {
  return (

    <Layout>
    <div>
        <div class="" id="work">
                <h2 class="section-title">Projects</h2>

                <div class="work__container bd-grid">
                    <a href="https://abishkar123.github.io/fontendpage/" target="_blank" class="work__img">
                        <img src={project1}/>
                    </a>
                    <a href="" class="work__img">
                        <img src={project2}/>
                    </a>
                    <a href=" https://abishkar123.github.io/Candidate/" class="work__img">
                        <img src={project3
                        }/>
                    </a>
                    <a href="https://abishkar123.github.io/react-prank-calculator/" class="work__img">
                        <img src={project4} alt=""/>
                    </a>
                    <a href="https://abishkar123.github.io/React-imbd-movieapp/" class="work__img">
                        <img src={project5} alt=""/>
                    </a>
                    
                </div>
          </div> 

    </div>
    </Layout>
  )
}
