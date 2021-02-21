import React from 'react';
import photo from './photos/coverPhoto.png';


const Banner = () => {
	return(
  <div className = 'vh-100-ns o-90 vh-50-m w-100 vh-30 mt4 mt0-ns garamond' style={{backgroundImage: `url(${photo})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    <div className ='flex flex-column ml7-ns mr6 ml4-m items-start-ns'>
      <h1 className="f-headline-ns lh-solid-ns f-subheadline-m orange f3 pt2-m pt3 mt6-m mb0 pr4-ns pt7-ns">AVENOIR </h1>
      <p className="f4-ns f6-m f7 black mt0 pt0 ml2 mb3">“At home I serve the kind of food I know the story behind” – Michael Pollan</p>
    </div>
      <div className='vp2-ns ml4-m pb3 ml7-ns flex pt4-ns '>
        <a class="f3-ns f5-m f7 ph1 mh2 pb1 pt2 br-pill v-mid no-underline shadow-4 black ba b--black grow pa3-ns dib mr4-ns"
          href="/user/login">
          CUSTOMER
        </a>
        <a class="f3-ns f5-m f7 ph1 mh2 pb1 pt2 br-pill v-top black shadow-4 no-underline ba grow pa3-ns dib"
          href="/business/login">
          BUSINESS OWNER
        </a>
      </div>
    
  </div>
  

	);
}

export default Banner;