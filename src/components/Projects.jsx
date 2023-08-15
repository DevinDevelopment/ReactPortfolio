// Imports for our Portfolio page
import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../assets/images/socialSite.jpg'
import Snake from '../assets/images/snakeGame.jpg'
import Tutorfinder from '../assets/images/tutorFinder.png'
import Weatherapp from '../assets/images/weatherApp.png'
import Footer from './Footer';
import '../Index.css'

//This function sets the photots/links for the project section. 
export default function Projects() {
  return (
    <>
        <div className="container">
          <div className="row mt-4">
            <h1 className='title'>Projects</h1>
            <div className="col-6 mt-4">
              <Link key={1} to="https://github.com/DevinDevelopment/EcommerceBackend">
                <img
                  className="shadow-4-strong img-fluid rounded-4 project-img"
                  alt="image"
                  src={Social}
                  width="100%" 
                  height="auto"
                />
              </Link>
              <Link key={2} to="https://github.com/DevinDevelopment/SnakeGame">
                <img
                  className="shadow-4-strong img-fluid rounded-4 mt-4 project-img"
                  alt="image"
                  src={Snake}
                  width="100%" 
                  height="auto"
                />
              </Link>
            </div>
            <div className="col-6 mt-4">
              <Link key={4} to="https://github.com/DevinDevelopment/weatherApp">
                <img
                  className="shadow-4-strong img-fluid rounded-4 project-img"
                  alt="image"
                  src={Weatherapp}
                  width="100%" 
                  height="auto"
                />
              </Link>
              <Link key={3} to="https://github.com/DevinDevelopment/TutorFinder">
                <img
                  className="shadow-4-strong img-fluid rounded-4 mt-4 project-img"
                  alt="image"
                  src={Tutorfinder}
                  width="100%" 
                  height="auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-4">     
          <Footer/>
        </div>  
    </>
  );
}
