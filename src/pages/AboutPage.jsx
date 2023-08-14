import Footer from '../components/Footer';
import portrait from '../assets/images/me.jpg'
import '../Index.css'

export default function AboutPage() {
  return (
    <>
    <div className="container mt-4 background">
      <div className="row">
        <h1 className="mb-5 title" >About me</h1>
        <div className="col-lg-6">
          <img className="rounded-circle shadow-4-strong img-fluid" alt="image" src={portrait} />
        </div>
        <div className="col-lg-6">
          <div className="mt-5 pt-5">
            <p>
              Greetings, I'm Devin Nunez, a dedicated web developer with a strong command of HTML, CSS, JavaScript, Node.js, Express.js, Bootstrap, and React. My journey into the digital realm began with a curiosity that evolved into a 
              passion for creating dynamic and user-centric web experiences. Proficient in front-end technologies, I excel in translating designs into responsive interfaces, utilizing frameworks like Bootstrap and React to craft engaging
              user journeys. My expertise extends to the backend, where I leverage Node.js and Express.js to build efficient and seamless applications. Beyond traditional web development, I've delved into CRM systems, specializing in Dynamics 365.
              I utilize JavaScript for crafting intricate front-end components and master C# plugins to optimize workflows within the CRM environment. Collaborative development is paramount in today's landscape, and I excel in using GitHub for streamlined teamwork and version control. Beyond code, 
              I cherish outdoor explorations, culinary experiments, and literary escapades that enrich my creativity. If you're seeking a passionate and skilled developer to bring your digital visions to life, let's connect and collaborate!
            </p>
          </div> 
        </div>
      </div>
    </div>
    <div className="row footer">
      <div className="pb-4">   
          <Footer/>
      </div>
    </div>
    </>
  );
}
