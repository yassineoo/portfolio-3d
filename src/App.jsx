import { BrowserRouter } from 'react-router-dom';
import {
     Contact,
     Hero,
     About,
     Navbar,
     Feedbacks,
     StarsCanvas,
     Tech,
     Works,
     Experience,
} from './components';
function App() {
     return (
          <BrowserRouter>
               <div className='relative z-0 bg-primary '>
                    <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
                         <Navbar />
                         <Hero />
                    </div>
                    <About/>
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />
                    <div className='relative z-0'>
                         <Contact />
                         <StarsCanvas />
                    </div>
               </div>
          </BrowserRouter>
     );
}

export default App;
