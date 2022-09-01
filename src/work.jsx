import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

function Work() {
  return (  
    <div className='App'>
      <div className='App-header'>
        <div >
        <Navbar/>
        </div>
      </div>


    <div>
        <h4 style={{margin:'10%'}}>Sorry! Still working on that part.</h4>
        <img className='picture' src={'./profile-favicon.ico'} style={{width:'10%'}}/>
    </div>

    </div>
  );
}

export default Work;