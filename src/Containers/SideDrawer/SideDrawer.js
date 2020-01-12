import React from 'react';
// import Logo from '../Logo/Logo';
import  Navigation from '../../Components/Navigation/Navigation';
import './SideDrawer.css';
// import Backdrop from '../Backdrop/Backdrop';
import Auxi from '../Auxi/Auxi';

const sideDrawer = (props) => {
    let attachedClasses = "SideDrawer Close";
    if(props.show){
        attachedClasses= "SideDrawer Open";
    }
    return(
        <Auxi>
            {/* <Backdrop show={props.show} clicked={props.closed}/> */}
            <div onClick={props.closed}>
                <div className={attachedClasses}>
                    {/* <div><Logo height="11%" /></div> */}
                    {/* <nav> */}
                        <div><Navigation isSignedIn={props.isAuth} /></div>
                    {/* </nav> */}
                </div>
            </div>
        </Auxi>
    );
}

export default sideDrawer;