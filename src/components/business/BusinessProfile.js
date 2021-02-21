import React from 'react';
import { useState, useEffect } from 'react';
import BusinessNavigation from './BusinessNavigation';
import defaultProfile from '../home/photos/chef.png';
import rating from '../home/photos/rating.gif';

const BusinessProfile = () => {

    useEffect(() => {
        fetch('https://authentic-uoft.herokuapp.com/business/profile', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            // get the email from storage
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.error){
                           
                        } else {
                            
                            // picture = data.profilPicture,
                            // companyName = data.name,
                            // aboutCompany = data.about,
                            // avgRating = data.averageRating,
                            // ratingsAndReviews = data.ratingsAndReviews,
                            // menu = data.menu
                        }
                    })
                    .catch(err => {
                      console.log("you we couldn't fetch the thing") 
                      // you're trying to access a page that doesn't exists
                    })
    }, []);
    
    return(
        //this div holds all of the profile
        <div>
        <BusinessNavigation/>

            {/* this div will hold the businesses picture and name*/}
            <div className="flex pt6-ns justify-center pt2">
                <img src={defaultProfile} class="w3 w4-ns w3-m flex items-center" alt="profilePicture"></img>
                 <p className="f4 f1-ns mh7 ml0 f2-m">Companies name</p>
            </div>
        
            <p className="justify-center  mh3 mh5-m mh7-ns pa2 f3-m f2-ns">Hey! This is about companies about me info!</p>

            {/* this div holds the rating */}
            <div className="flex items-center justify-center">
                <img src={rating} class="ph2 flex items-center" img align="left" alt="rating"></img>
            </div>
            
        </div>
    )//return
}//BusinessProfile

export default BusinessProfile;