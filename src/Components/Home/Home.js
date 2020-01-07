import React from 'react';
import Tilt from 'react-tilt';
import logo from '../../Assets/Images/logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Tilt className="Tilt" options={{ max : 50 }} >
            <div className="Tilt-inner"> <img src={logo} className="logo" alt="logo" /> </div>
        </Tilt>
        
        <p>
        NeoWs - (Near Earth Object Web Service)
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default Home;