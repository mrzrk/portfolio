import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

function Resume() {
  return (  
    <div className='App'>
      <div className='App-header'>
        <div >
        <Navbar/>
        </div>
      </div>

      <div className='resume' style={{margin:'5%'}}>
      <img src={'./resume.svg'}/>
      </div>

    </div>
  );
}

export default Resume;