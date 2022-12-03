
import './App.css';
import my from "./asests/my.png";
import { AboutMe } from './component/AboutMe';
import { Body } from './component/Body';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { Projects } from './component/Projects';
import { Skills } from './component/Skills';
import { TopNav} from './component/TopNav';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from './component/Layout';

function App() {
  return (
    

  
    <div>
    
        <div className="l-main">
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Body />} />
      <Route path= "/AboutMe" element={<AboutMe/>} />
      <Route path= "/Skills" element={<Skills  />} />
      <Route path= "/Projects" element={<Projects/>} />
      <Route path= "/Contact" element={<Contact/>} />
      
      
      </Routes>
      </BrowserRouter>
           
        </div>

       
        


        {/* <!--===== SCROLL REVEAL =====--> */}
        <script src="https://unpkg.com/scrollreveal"></script>
 
        <script src="assets/js/main.js"></script>
    
    </div>
  
  );
};
export default App;
