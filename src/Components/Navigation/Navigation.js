import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = ({isSignedIn, setIsSignedIn}) => {

    let returningElement = null;

    if(isSignedIn) {
        returningElement =  <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                                {/* <NavLink to="/" exact className='f3 link dim black underline pa3 pointer'>Home</NavLink> */}
                                <div className="NavigationItem"><NavLink to="/" exact className='f3 link dim black underline pa3 pointer'>SignOut</NavLink></div>
                            </nav>
    } else {
        returningElement =  <div className="NavigationItems">
                                {/* <div className="NavigationItem"><NavLink to="/" exact className='f3 link dim black underline pa3 pointer'>Home</NavLink></div> */}
                                <div className="NavigationItem"><NavLink to="/register" exact className='f3 link dim black underline pa3 pointer'>Register</NavLink></div>
                                <div className="NavigationItem"><NavLink to="/signin" exact className='f3 link dim black underline pa3 pointer'>SignIn</NavLink></div>
                            </div>
    }

    return returningElement;
}

export default Navigation;