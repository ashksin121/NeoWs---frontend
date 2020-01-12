import React from 'react';
import './Toolbar.css';
import Logo from '../Logo/Logo';
import Navigation from '../../Components/Navigation/Navigation';
import '../SideDrawer/DrawerToggle/DrawerToggle.css';

const toolbar = (props) => {
    return(
        <header className="Toolbar">
            <div onClick={props.click} className="DrawerToggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo height="80%" />
            <nav className="DesktopOnly">
                <Navigation isSignedIn={props.isAuth} setIsSignedIn={props.setIsSignedIn} />
            </nav>
        </header>
    );
}

export default toolbar; 