import React from 'react';
import UserNavigation from './UserNavigation';
import Post_NoDeletion from '../business/Post_NoDeletion';
import defaultProfile from '../home/photos/chef.png';
import orderIcon from '../home/photos/orderIcon.png';

const UserOrders = () => {

    return(
        <div>
        <UserNavigation/>

            {/* centre title and icon */}
            <div className="flex items-center justify-center pb3">
                <img src={orderIcon} class="w-10 w3-m w-5-ns" img align="right" alt="profilePicture"></img>
                <p className="f3 f2-m f1-ns bb">Users My Orders</p>
            </div>

            <div className="ba mh4 center w-70 w-50-ns">
                {/* this div will hold the businesses picture and name*/}
                <div className="flex items-center justify-center">
                    <img src={defaultProfile} class="w-10 w3-m w3-ns flex items-center pv3" img align="left" alt="profilePicture"></img>
                    {/* this href needs to be updated to go to the users quickview page with rating and such */}
                    <a class="f5 f4-m f2-ns link dim ph1 pv1 mb2 dib black" href="/user/UserViewProfile">Name</a>
                </div>

                <Post_NoDeletion/>
                <div>
                    <p className="ba center w4 w5-m w-50-ns f6 f5-m f3-ns">This is the current status of the order</p>
                </div>

            </div>

            {/* will need to print ALL current orders */}
        </div>
    )//return

}
export default UserOrders;