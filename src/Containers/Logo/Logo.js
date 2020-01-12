import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../Assets/Images/images.png';
import './Logo.css';

const logo = (props) => {
    return(
        <NavLink to="/" exact style={{height: '80%'}}><div className="Logo">
            <img src={Logo} alt="NeoWs" />
        </div></NavLink>
    );
}

export default logo;