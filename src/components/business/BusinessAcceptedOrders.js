import React from 'react';
import orderIcon from '../home/photos/orderIcon.png';
import BusinessNavigation from './BusinessNavigation';
import AcceptedOrder from './AcceptedOrder';
const BusinessAcceptedOrders = () => {

    return(
        <div>
             <BusinessNavigation/>
            {/* centre title and icon */}
            <div className="flex items-center justify-center">
                <p className="f3 f2-m f1-ns">Business Accepted Orders</p>
                <img src={orderIcon} class="w4-ns w3 " img align="right" alt="profilePicture"></img>
            </div>
            <AcceptedOrder/>
            {/* will need to print ALL current orders */}
        </div>
    )//return

}
export default BusinessAcceptedOrders;