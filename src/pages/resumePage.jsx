import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ResumePage() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className='mb-5 title'>My Web Development Skills:</h1>
            <h2>Front-End:</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Javascript</li>              
            </ul>
            <h2>Back-End:</h2>
            <ul className='mb-2'>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>express.js</li>
              <li>mySQL</li>
              <li>mongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
          <div className='row '>
            <div className='col-12 col-md-6'>
              <h1 className="mt-5">Resume</h1>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download my <span> </span>
                <span>
                  <Link to="/DevinsResume.docx" target="_blank" download>resume</Link>
                </span>
                <span> </span>here!
              </p>
            </div>
          </div>
        </div>
        <div className="pb-4">   
        <Footer/>
        </div>
    </>
  );
}
