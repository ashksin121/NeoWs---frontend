import React, {useState} from 'react';
import Auxi from '../Auxi/Auxi';
import './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

function Layout(props) {

    const[showDrawer, setShowDrawer] = useState(false);

    const sideClosed = () => {
        setShowDrawer(false);
    }

    const sideOpened = () => {
        setShowDrawer(true);
    }

    return (
        <Auxi>
            <Toolbar 
                isAuth={props.isSignedIn}
                click={sideOpened}
                setIsSignedIn={props.setIsSignedIn} />
            <SideDrawer
                isAuth={props.isSignedIn}
                show={showDrawer} 
                closed={sideClosed}
                setIsSignedIn={props.setIsSignedIn} />
            <main className="Content">
                {/* {this.props.children} */}
                {props.children}
            </main>
        </Auxi>
    );
}

export default Layout;