import React from 'react';
import kajal from './photos/kajal.jpg';
import nikhil from './photos/nikhil.jpg';
import cody from './photos/cody.png';
import defaultProfile from './photos/defaultProfile.png';


const Developers = () => {
	return(
   <div>
     <h1 className='pt5-ns f-subheadline-ns lh-title-ns'>OUR TEAM</h1>
      <div className='pb5-ns mv4-ns ma4 flex-m flex-wrap-ns flex-ns justify-center-ns '>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src={cody} className="h4-ns w4-ns br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
            <h1 className="f4">Cody</h1>
            <hr className="mw3 bb bw1 b--black-10"/>
          </div>
          <p className="lh-copy measure center f6 black-70">
            Cody is a second-year Computer Science student. This was Cody's
            first experience with web development. He is amazed by how much
            work goes into making a website.
          </p>
        </article>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src="http://tachyons.io/img/avatar_1.jpg" className="h4-ns w4-ns br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
            <h1 className="f4">Isaac</h1>
            <hr className="mw3 bb bw1 b--black-10"/>
          </div>
          <p className="lh-copy measure center f6 black-70">
            Isaac is a high school student. He is part of a robotics team and
            is passionate about technology. This is his first time participating in hackathon!
          </p>
        </article>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src={kajal} className="br-100 h4-ns w4-ns h3 w3 dib" title="Photo of a kitty staring at you"/>
            <h1 className="f4">Kajal</h1>
            <hr className="mw3 bb bw1 b--black-10"/>
          </div>
          <p className="lh-copy measure center f6 black-70">
            Kajal is a second-year computer science student. 
            She immigrated to Canada with her family from India. She also 
            loves to eat! She is delighted to be part of this project for those very reasons.
          </p>
        </article>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src={nikhil} className="br-100 h3 w3 h4-ns w4-ns dib" title="Photo of a kitty staring at you"/>
            <h1 className="f4">Nikhil</h1>
            <hr className="mw3 bb bw1 b--black-10"/>
          </div>
          <p className="lh-copy measure center f6 black-70">
            Nikhil is a fourth year Computer Science student. He is passionate
            about web development and technology in general. He enjoys working 
            on projects, especially in a team!
          </p>
        </article>
      </div>
    </div> 
        // <div className="">
       
        //     <div className="bg-washed-yellow w4-ns">
        //             <img src={defaultProfile}className="br-100 h4-ns w4-ns h3 w3 dib" alt="avatar"></img>
        //             <p className="f5-ns  mb0-ns f7 lh-copy measure">
        //             Typography has one plain duty before it and that is to convey information
        //             in writing. No argument or consideration can absolve typography from this
        //             duty. No argument or consideration can absolve typography from this
        //             duty.</p>
        //     </div>
      
         
        //     <div className="bg-washed-yellow">
        //             <img src={kajal}className="br-100 h3 w3 h4-ns w4-ns dib" alt="avatar"></img>
        //             <p className="f5-ns mb0-ns f7 lh-copy measure">
        //             Kajal is a second-year computer. She immigrated to Canada with her family when 
        //             she was nine year old. She also loves try out different types of food. For obvious 
        //             reasons, she is delighted to be part of a this project!</p>
        //     </div>
          
      
        //     <div className="bg-washed-yellow">
        //             <img src={defaultProfile}className="br-100 h4-ns w4-ns h3 w3 dib" alt="avatar"></img>
        //             <p className="f7 lh-copy measure">
        //             Typography has one plain duty before it and that is to convey information
        //             in writing. No argument or consideration can absolve typography from this
        //             duty.No argument or consideration can absolve typography from this
        //             duty. </p>
        //     </div>
        
        
        //     <div className="bg-washed-yellow">
        //             <img src={nikhil}className="br-100 h4-ns w4-ns h3 w3 dib" alt="avatar"></img>
        //             <p className="f7 lh-copy measure">
        //             Typography has one plain duty before it and that is to convey information
        //             in writing. No argument or consideration can absolve typography from this
        //             duty. No argument or consideration can absolve typography from this
        //             duty.</p>
        //     </div>
         
        // </div>
        
     
              
	);
}

export default Developers;