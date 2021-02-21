import React, {Component} from 'react';
import defaultProfile from '../home/photos/defaultProfile.png';
import rating from '../home/photos/ratings.png';
import UserNavigation from './UserNavigation';

const UserProfile = () => {

    return(
        //this div holds all of the profile
        <div>
        <UserNavigation/>

            {/* this div will hold the customers picture and name*/}
            <div className="flex items-center justify-center pt2">
                <img src={defaultProfile} class="w-20 w-10-ns flex items-center" img align="left" alt="profilePicture"></img>
            </div>
            <p className="pl2 f4 f2-m">Users name</p>
            <div className="">
                <label for="myfile mr1">Change my profile picture:    </label>
                <input type="file" id="myfile" name="myfile" accept="image/*"></input>
            </div>

            {/* this div holds the rating */}
            <div className="mw-10 flex items-center justify-center mt5">
                <img src={rating} class="w-10 ph2 flex items-center" img align="left" alt="rating"></img>

                {/* here needs to be a review thats been left */}
                <p>This users rating goes  /5</p>
            </div>

        </div>
    )//return
}//UserProfile

export default UserProfile;