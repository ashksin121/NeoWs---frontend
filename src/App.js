import React, {useState} from 'react';
import {Route,Switch, withRouter, Redirect} from 'react-router-dom';
import Particles from 'react-particles-js';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import './App.css';

const particlesOptions = {  
  "particles": {
    "number": {
        "value": 100,
        "density": {
            "enable": true,
            "value_area": 1500
        }
    },
    "line_linked": {
        "enable": true,
        "opacity": 0.02
    },
    "move": {
        "direction": "right",
        "speed": 0.05
    },
    "size": {
        "value": 5
    },
    "opacity": {
        "anim": {
            "enable": true,
            "speed": 2,
            "opacity_min": 0.05
        }
    }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
}

function App() {

  const[isSignedIn, setIsSignedIn] = useState(false);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/register" component={SignUp} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className="App">
      <Particles className='particles' params={particlesOptions} />
      <Navigation isSignedIn={isSignedIn} />
      {routes}
    </div>
    
  );
}

export default App;
