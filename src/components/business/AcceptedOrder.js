import React from 'react';
import defaultProfile from '../home/photos/defaultProfile.png';
import Post_NoDeletion from "./Post_NoDeletion";


const AcceptedOrder = () => {

    return(
        //this div will hold the entire customer order 
        <div className="flex ba w-80 w-50-m w-third-ns pa2 mv4 flex-column center justify-center">

            {/* this div will hold the customers picture and name*/}
            <div className="flex items-center justify-center">
                <img src={defaultProfile} class="w-20 flex items-center" img align="left" alt="profilePicture"></img>
                {/* this href needs to be updated to go to the users quickview page with rating and such */}
                <a class="f5 f4-m f2-ns link dim ph1 pv1 mb2 dib black" href="/business/ViewProfile">Name</a>
            </div>

            {/* this div will hold the business post info for the order */}
            <div className="ph3 pt2">{new Post_NoDeletion().render()}</div>

            {/* this div will hold the special request info for the order */}
            <div className="ba flex items-center justify-center mh4">
                <p>This is where the special request info will go</p>
            </div>

        </div>
    )//return

}
export default AcceptedOrder;