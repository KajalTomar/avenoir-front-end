import React, {Component} from 'react';
import Banner from './Banner';
import About from './About';
import Developers from './Developers';

class Welcome extends Component {
	render(){
        return(
            <div className="Home justify center bg-washed-red">
                <Banner />
                <About />
                <Developers />
            </div>
        );
    }   
}

export default Welcome;
