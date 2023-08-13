import { Link } from 'react-router-dom';
import Social from '../assets/images/socialSite.jpg'
import Snake from '../assets/images/snakeGame.jpg'
import Tutorfinder from '../assets/images/tutorFinder.png'
import Weatherapp from '../assets/images/weatherApp.png'
import { MDBRipple } from 'mdb-react-ui-kit';

export default function Projects() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
        <div class="container">
            <div class="row mt-4" >
            <h1>Projects</h1>
                <div class="col-2">
                    <Link key={1} to="https://github.com/DevinDevelopment/EcommerceBackend">
                        <img class="shadow-4-strong img-fluid rounded-4 " alt="image" src={Social} />
                    </Link>,
                    <Link key={2} to="https://github.com/DevinDevelopment/SnakeGame">
                        <img class="shadow-4-strong img-fluid rounded-4" alt="image" src={Snake} />
                    </Link>,
                </div>
                <div class="col-2">
                    <Link key={4} to="https://github.com/DevinDevelopment/weatherApp">
                        <img class="shadow-4-strong img-fluid rounded-4" alt="image" src={Weatherapp} />
                    </Link>, 
                    <Link key={3} to="https://github.com/DevinDevelopment/TutorFinder">
                        <img class="shadow-4-strong img-fluid rounded-4" alt="image" src={Tutorfinder} />
                    </Link>,   

                    <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      rippleTag='div'
      rippleColor='light'
    >
      <img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple>       
                </div>
            </div>
        </div>
    </>
  );
}
