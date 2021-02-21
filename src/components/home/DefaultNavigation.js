import React from 'react';
import homeIcon from '../home/photos/homeIcon.png';


const DefaultNavigation = () => {

    return(
            <div className="flex bb flex items-center justify-around pt4-ns pa1 pl2 pb3-ns mb0 mt2">
                <a className="dib black bg-animate hover-bg-white hover-black no-underline br-pill b--white-20 pa1" href="/">
                    <img src={homeIcon} className="w3-ns w3-m w2" alt="homeButton"></img>
                </a>
            </div>
    )//return
}//nagivation 
export default DefaultNavigation; 