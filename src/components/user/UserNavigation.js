import React from 'react';
import defaultProfile from '../home/photos/defaultProfile.png';
import menuIcon from '../home/photos/menuIcon.png';
import orderIcon from '../home/photos/orderIcon.png';
import homeIcon from '../home/photos/homeIcon.png';


const UserNavigation = () => {

    return(
            <div className="flex bb flex items-center justify-around pt4-ns pa1 pl2 pb3-ns mb0 mt2">

                 <a className="dib black bg-animate hover-bg-white hover-black no-underline pv1 ph2 br-pill b--white-20" href="/user/orders">
                    <img src={orderIcon} className="w3-ns w3-m w2" alt="orderIcon"></img>
                </a> 
                <a className="dib black bg-animate hover-bg-white hover-black no-underline br-pill b--white-20 pa1" href="/user/home">
                    <img src={homeIcon} className="w3-ns w3-m w2" alt="homeButton"></img>
                </a>
                <a className="dib black bg-animate hover-bg-white hover-black no-underline pv1 ph2 br-pill b--white-20" href="/user/profile">
                    <img src={defaultProfile} className="w3-ns w3-m w2" alt="profilePicture"></img>
                </a>
            </div>
    )//return
}//nagivation 
export default UserNavigation; 