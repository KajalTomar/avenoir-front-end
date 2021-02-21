import React from 'react';
import BusinessNavigation from './BusinessNavigation';
import { useState, useEffect } from 'react';

const ReviewCustomer = () => {
    const [states, setValues] = useState({
        review: '',
        rating: ''
    });

    const set = name => {
    return ({ target: { value } }) => {
        setValues(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
    }
    };

    const submitHandler = () => {
        let validated = true
    }

	return (
         <div>{/* entire page */}
           <BusinessNavigation/>

            {/*this div is for the review section*/}
           <div className="pa4-ns ba-ns ma6-ns ma3-m pa2-m pa1 black-60 tc center justify-center">

                {/* title of page */}
                <p className="f-subheadline-ns f3 f2-m">Reviewing Your Customer</p>

                {/* input sections */}
                <form>


                {/* this is the rating field*/}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="rating">Rating*</label>
                <select className="w-40 measure" value={states.prov} onChange={set('rating')} >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
              </div>

                {/* this is the review field*/}
                <div className="center justify-center">
                    <div>
                        <p>Please enter the review you wish to submit:</p>
                        <textarea className="review" rows ="10" cols="35" value={states.review}  onChange={set('review')}>   </textarea>

                        <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-lightblue hover-bg-white grow pointer f6 w-15 measure black" type="button" onClick={submitHandler} defaultValue="Submit" /></div>
                    </div>
                </div>{/* review field */}
                    
                </form>

            </div>{/* review section */}

        </div> /* entire page */
    )//return
}//review customer

export default ReviewCustomer;
