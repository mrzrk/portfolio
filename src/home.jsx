import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Workcard from './work-card';


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

        <div >
        <Workcard/>
        </div>

      </div>
    </div>
  );
}

export default Home;