import React, {Component} from 'react';
import defaultProfile from '../home/photos/chef.png';
import rating from '../home/photos/ratings.png';
import UserNavigation from './UserNavigation';

const UserViewProfile = () => {

    return(
        //this div holds all of the profile
        <div>
        <UserNavigation/>
            {/* this div will hold the customers picture and name*/}
            <div className="flex items-center justify-center">
                <img src={defaultProfile} class="w-10 flex items-center" img align="left" alt="profilePicture"></img>
                {/* this href needs to be updated to go to the users quickview page with rating and such */}
            <p className="pl2 f4 f2-m">Business name</p>
            </div>

            {/* this div holds the rating */}
            <div className="mw-10 flex items-center justify-center">
                <img src={rating} class="w-10 ph2 flex items-center" img align="left" alt="profilePicture"></img>
                <p>This businesses rating goes  /5</p>
            </div>
        </div>
    )//return
}//ViewProfile

export default UserViewProfile;