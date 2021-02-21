import React from 'react';
import defaultProfile from '../home/photos/chef.png';
import menuIcon from '../home/photos/menuIcon.png';
import orderIcon from '../home/photos/orderIcon.png';
import homeIcon from '../home/photos/homeIcon.png';


const BusinessNavigation = () => {

    return(
            <div className="flex bb flex items-center justify-around pt4-ns pa1 pl2 pb3-ns mb0 mt2">

                <a className="dib black bg-animate hover-bg-white hover-black no-underline br-pill b--white-20 pa1" href="/business/home">
                    <img src={homeIcon} className="w3-ns w3-m w2" alt="homeButton"></img>
                </a>
                <a className="dib black bg-animate hover-bg-white hover-black no-underline pv1 ph2 br-pill b--white-20" href="/business/acceptedOrders">
                    <img src={orderIcon} className="w3-ns w3-m w2" alt="acceptingOrdersIcon"></img>
                </a> 
                <a className="dib black bg-animate hover-bg-white hover-black no-underline pv1 ph2 br-pill b--white-20" href="/business/menu">
                    <img src={menuIcon} className="w3-ns w3-m w2" alt="menuIcon"></img>
                </a>
                <a className="dib black bg-animate hover-bg-white hover-black no-underline pv1 ph2 br-pill b--white-20" href="/business/profile">
                    <img src={defaultProfile} className="w3-ns w3-m w2" alt="profilePicture"></img>
                </a>
            </div>
    )//return
}//nagivation 
export default BusinessNavigation; 