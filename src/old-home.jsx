import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';


function Home() {
  return (  
    <div className='App'>
      <div className='App-header'>
        <div >
        <Navbar/>
        </div>
      </div>

      <div className='intro-container'>
        <div className='intro-column1'>
          <h4>hi!</h4>
          <h1>I design products based on user research.</h1>
        </div>
        <div className='intro-column2'>
          <img src={'./profile.png'}/>
        </div>
      </div>

      <div className='about-container'>
        <div className='about-column1'>
          <h4>i'm passionate about</h4>
        </div>
        <div className='about-column2'>
          <h4>end users</h4>
          <p>
          I’m always shifting between human-centric and life-centric; I still haven’t decided which is more important as a product designer. Human-centric because it’s people using the product; but without life, there won’t be people to design for.
          </p>
        </div>
        <div className='about-column3'>
          <h4>accessibility</h4>
          <p>
          I’m hard of hearing with a passport that limits access to opportunities. I want people to feel included in the products I designed; and never feel like their needs are secondary.
          </p>
        </div>
      </div>

      <div className='work-container'>
        <div className='work-row1'>
          <h3>Some Work</h3>
        </div>
        <div className='work-row2'>
          <div className='work-column1'>
            <a>
            <div className='work-card'>
              <h5>Museum of the Future </h5> 
              <img src={'./MOTF.jpeg'}/>
              <p>Public installation showcasing how enterprise software and technologies are shaping our future.</p>
            </div>
            </a>
            <a>
            <div className='work-card'>
              <h5>Sustainable Community App</h5>
              <img src={'./under-construction.png'}/>
              <p>Community Social Platform encouraging sustainable behaviors adoption for one of the most prominent real estate developers in the region.</p>
            </div>
            </a>
          </div>
          <div className='work-column2'>
           <a>
           <div className='work-card'>
              <h5>Hayati Health App</h5>
              <img src={'./hayati.png'}/>
              <p>Health app helping people with chronic diseases living in the UAE maintain a healthy lifestyle.</p>
            </div>
           </a>
           <a>
           <div className='work-card'>
              <h5>XO,</h5>
              <img src={'./under-construction.png'}/>
              <p>Mobile app helping you be thoughtful with your family and friends by never forgetting to celebrate an important moment.</p>
            </div>
           </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;