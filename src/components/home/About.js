import React from 'react';
/*
const About = () => {
	return(
        <div className="About">
        </div>
	);
}
*/
//is this used or needed?
let URL = ""

class About extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			purpose: 'PURPOSE',
			purposeBody: "We believe in creating genuine connections through food for international students who may miss the touch of home.",
			subheading: "How can you get involved? ",
			CustomerTitle: "AS A CUSTOMER",
			CustomerBody: "Avenoir forges relationships between home-based businesses and people who want to experience culture through food at affordable prices. Sign up as a customer to find delicious food and support small-business!",
			BusinessTitle: "AS A BUSINESS",
			BusinessBody: "Avenoir is a platform where individuals can use their cooking skills to make money. It provides flexibility and ownership. It also gives you a chance to create meaningful connections through authentic homemade cultural food.  All you need to do is create a business account, and we’ll take care of the rest."		
		}
	}
	
	render(){
		return(
			<div style={{textAlign: "left"}} className='pl5-ns pr7-ns mt7-ns pl4-m pr5-m mt6-m mv3 pr4 pl3 avenir mt6'>
				<h1 className='orange f-headline-ns lh-solid-ns f-subheadline-m lh-title-m o-90 f1 lh-title helvetica mb0'>{this.state.purpose}</h1>
				<h1 className='f-subheadline-ns lh-solid-ns f2-m f7 o-80 dark-red'>{this.state.purposeBody}</h1>
				<h2 className='f-subheadline-ns pt6-ns mt6-m f1-m mt4 o-70'>{this.state.subheading}</h2>
				<a className='pt4-ns pb0-ns mb0-ns f2-ns lh-title-ns f2-m f4 mt5-m mb0' href="/user/login">{this.state.CustomerTitle}</a>
				<p className='f3-ns o-60 lh-title-ns f3-m f7'>{this.state.CustomerBody}</p>
				<a className='pt5-ns pb0-ns f2-ns lh-title-ns f2-m f4 mt5-m mb0' href="/business/login">{this.state.BusinessTitle}</a>
				<p className='f3-ns mb0 f3-m o-60 mb5'>{this.state.BusinessBody}</p>
			</div>
		)
	}
}

export default About;


