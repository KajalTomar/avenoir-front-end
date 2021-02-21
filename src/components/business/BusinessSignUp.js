
import React from 'react';
import { useState, useEffect } from 'react';
import DefaultNavigation from '../home/DefaultNavigation'
import photo from './photos/background.png';

const BusinessSignUp = () => {
    const [values, setValues] = useState({
      name: '',
      businessName: '',
      expertise: '',
      aboutBusiness: '',
      nameError: null,
      businessNameError: null,
      emailError: null,
      passwordError: null,
      passwordError2:null,
      phoneError: null,
      expertiseError:null,
      aboutBusinessError:null,
      expError:null,
      cvvError: null,
      ccError: null,
      postalError: null,
      cityError: null,
      streetError: null,
      email: '',
      password: '',
      password2: '',
      phone: '',
      street: '',
      city: '',
      prov: '',
      cc: '',
      exp: '',
      cvv: '',
      postal: '',
      latitude: '49.8951',
      longitude: '97.1384',
      success: null,
      error: null
    });

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
    }
  };

//     function success(pos) {
//       var crd = pos.coords;
//       console.log("Your current position is:");
//       console.log(`Latitude : ${crd.latitude}`);
//       console.log(`Longitude: ${crd.longitude}`);
//       console.log(`More or less ${crd.accuracy} meters.`);
//     }
//
//     function error() {
//       console.log('Error in geolocation')
//     }

//   useEffect(() => {

//     if (navigator.geolocation) {
//       navigator.permissions
//         .query({ name: "geolocation" })
//         .then(function (result) {
//           if (result.state === "granted") {
//             navigator.geolocation.getCurrentPosition(success, error);
//             //If granted then you can directly call your function here
//           } else if (result.state === "prompt") {
//             console.log(result.state);
//           } else if (result.state === "denied") {
//             //If denied then you have to show instructions to enable location
//           }
//           result.onchange = function () {
//             console.log(result.state);
//           };
//         });
//     } else {
//       alert("Sorry Not available!");
//     }
//   }, [values.latitude, values.longitude])

  const submitHandler = () => {
    setValues(oldValues => ({...oldValues, success: null, error: null }));
    // validation stuff
    let validated = true
    {values.nameError = null};
    {values.businessNameError = null};
    {values.emailError = null};
    {values.passwordError = null};
    {values.passwordError2 = null};
    {values.phoneError = null};
    {values.expertiseError = null};
    {values.aboutBusinessError = null};
    {values.ccError = null};
    {values.expError = null};
    {values.cvvError = null};
    {values.postalError = null};
    {values.cityError = null};
    {values.streetError = null};
    
  

    if(values.name.length === 0 || values.name.length >= 50){
       setValues(oldValues => ({...oldValues, nameError: 'Please enter valid name' }));
       validated = false
    }

    if(values.businessName.length === 0 || values.businessName.length >= 50){
       setValues(oldValues => ({...oldValues, businessNameError: 'Please enter valid business name' }));
       validated = false
    }

    //for final product validate that its a real country not just a valid input
    if(values.expertise.length === 0 || values.expertise.length >= 50){
       setValues(oldValues => ({...oldValues, expertiseError: 'Please enter valid country of expertise' }));
       validated = false
    }

    //for final product validate that its a real country not just a valid input
    if(values.aboutBusiness.length === 0 ){
       setValues(oldValues => ({...oldValues, aboutBusinessError: 'Please do not leave about business section empty' }));
       validated = false
    }

    if(values.password.length <= 8 || values.password.length >= 20){
      setValues(oldValues => ({...oldValues, passwordError: 'Please enter valid password' }));
      validated = false
    }
    
    if( !Object.is(values.password,values.password2) ){
      setValues(oldValues => ({...oldValues, passwordError2: 'Passwords do not match' }));
      validated = false
    }
    
    if( values.email.indexOf('@') === -1 ){
      setValues(oldValues => ({...oldValues, emailError: 'Email must contain @ symbol' }));
      validated = false
    }
    
    if( values.email.indexOf('@') === values.email.length-1 ){
      setValues(oldValues => ({...oldValues, emailError: 'Email must contain characters after @ symbol ' }));
      validated = false
    }
    
    //later make sure its only digits
    if( values.phone.length !== 10 ){
      setValues(oldValues => ({...oldValues, phoneError: 'Please enter a valid phone number' }));
      validated = false
    }

    if( values.cc.length != 12 || isNaN(values.cc)){
      setValues(oldValues => ({...oldValues, ccError: 'Please enter a valid credit card number' }));
      validated = false
    }

    if(values.cvv.length !=3 || isNaN(values.cvv)){
      setValues(oldValues => ({...oldValues, cvvError: 'Please enter a valid ccv number' }));
      validated = false
    }

    //later make sure that its also formatted right and that its a date in the future
    if( values.exp.length !=7){
      setValues(oldValues => ({...oldValues, expError: 'Please enter a valid expiry date' }));
      validated = false
    }

    //later make sure that its also formatted right
    if( values.postal.length !=6 ){
      setValues(oldValues => ({...oldValues, postalError: 'Please enter a valid postal code' }));
      validated = false
    }

    if( values.city.length === 0){
      setValues(oldValues => ({...oldValues, cityError: 'Please enter a valid city' }));
      validated = false
    }

    if( values.street.length === 0){
      setValues(oldValues => ({...oldValues, streetError: 'Please enter a valid street' }));
      validated = false
    }
    
    if(validated){
        fetch('https://authentic-uoft.herokuapp.com/auth/business/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                CompanyName: values.businessName,
                email: values.email,
                password: values.password,
                phoneNumber: values.phone,
                street: values.street,
                city: values.city,
                state: values.state,
                zipCode: values.postal,
                cardNumber: values.cc,
                cvv: values.cvv,
                cardExpiration: values.exp,
                latitudeAtReg: values.latitude,
                longitudeAtReg: values.longitude,
                expertise:values.expertise,
                AboutMyBusiness:values.aboutBusiness
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
              setValues(oldValues => ({ ...oldValues, error: "Unable to send verification email to that email address." }))
            }
            else {
              setValues(oldValues => ({ ...oldValues, success: "Signup was successful, please check your email for verification." }))
            }
        })
        .catch(err => {
          setValues(oldValues => ({ ...oldValues, error: "There was an error please try again." }))
          console.log("yo we couldn't fetch the thing");
          // you're trying to access a page that doesn't exists
        })
    }
  }

  return (
   //padding around size 4, color black-80 used for everything in the business signup
   <div>
    <DefaultNavigation/>
    <div   style={{backgroundImage: `url(${photo})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="pa4-ns ba-ns ma6-ns ma3-m pa2-m pa1 black-60 tc">
      <p className="f-subheadline-ns f3 f2-m">Business Sign up</p>
      <form>
      
            <div className="f1-ns f5 f3-m">
              <p>Business Information</p>
            </div>
            
            {/* this is the name field */}
            <div className="mt3">                                                                                          
              <label className="db fw4 lh-copy f6" htmlFor="name">Name*</label>                                               
              <input className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="text" name="name" id="name"  required="required" value={values.name} onChange={set('name')}/>
            <p style={{color: 'red'}}>{values.nameError}</p>
            </div>

            {/* this is the business name field */}
            <div className="mt3">                                                                                          
              <label className="db fw4 lh-copy f6" htmlFor="businessName">Business Name*</label>                                               
              <input className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="text" name="businessName" id="businessName"  required="required" value={values.businessName} onChange={set('businessName')}/>
            <p style={{color: 'red'}}>{values.businessNameError}</p>
            </div>

            {/* this is the business specialty field */}
            <div className="mt3">                                                                                          
              <label className="db fw4 lh-copy f6" htmlFor="expertise">Country of Expertise*</label>                                               
              <input className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="text" name="expertise" id="expertise"  required="required" value={values.expertise} onChange={set('expertise')}/>
            <p style={{color: 'red'}}>{values.expertiseError}</p>
            </div>

            {/* this is the business about me field */}
            <div className="mt3">                                                                                          
              <label className="db fw4 lh-copy f6" htmlFor="aboutBusiness">About my Business*</label>                                               
              <input className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="text" name="aboutBusiness" id="aboutBusiness"  required="required" value={values.aboutBusiness} onChange={set('aboutBusiness')}/>
            <p style={{color: 'red'}}>{values.aboutBusinessError}</p>
            </div>

              {/* this is the email address field */}
              <div className="mt3">
                <label className="db fw4 lh-copy f6 " htmlFor="email-address">Email address*</label>
                <input value={values.email} onChange={set('email')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="email" name="email-address" id="email-address"  required="required"/>
                <p style={{color: 'red'}}>{values.emailError}</p>
              </div>

              {/* this is the password field*/}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="password">Password*</label>
                <input value={values.password} onChange={set('password')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="password" name="password" id="password"  required="required"/>
                <p style={{color: 'red'}}>{values.passwordError}</p>
              </div>

              {/* this is the confirm password field*/}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="password">Confirm Password*</label>
                <input value={values.password2} onChange={set('password2')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="password" name="password2" id="password2"  required="required"/>
                <p style={{color: 'red'}}>{values.passwordError2}</p>
              </div>

              {/* this is the phone number field need to change the box. has arrow on side which should be removed, and would like to add brackets and dash for phone number*/}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="phoneNumber">Phone Number*</label>
                <input value={values.phone} onChange={set('phone')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="tel" name="phoneNumber" id="phoneNumber"  required="required"/>
                <p style={{color: 'red'}}>{values.phoneError}</p>
              </div>

              <div className="f1-ns f5 f3-m">
                <p>Address</p>
              </div>

              {/* this is the street field */}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="street">Street*</label>
                <input value={values.street} onChange={set('street')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="text" name="street" id="street"  required="required"/>
                <p style={{color: 'red'}}>{values.streetError}</p>
              </div>

              {/*this is to keep city and postal on one line */}
            <div className = "flex items-center justify-center">
              {/* this is the City field */}
              <div className="mt3 pa3 ph4">
                <label className="db fw4 lh-copy f6" htmlFor="City">City*</label>
                <input value={values.city} onChange={set('city')} className="pv2 br3 input-reset ba bg-transparent hover-bg-white w-100" type="text" name="City" id="City"  required="required"/>
                <p style={{color: 'red'}}>{values.cityError}</p>
              </div>
              {/* this is the postal field */}
              <div className="mt3 pa3 ph4">
                <label className="db fw4 lh-copy f6" htmlFor="City">Postal*</label>
                <input value={values.postal} onChange={set('postal')} className="pv2 br3 input-reset ba bg-transparent hover-bg-white w-100" placeholder="XXXXXX" type="text" name="Postal" id="Postal"  required="required"/>
                <p style={{color: 'red'}}>{values.postalError}</p>
              </div>
            </div>
              
              {/* this is the state field*/}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="State/Province">State/Province*</label>
                <select className="w-40 measure" value={values.prov} onChange={set('prov')}>
                  <option value="Alberta">Alberta</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="New Brunswick">ManitNew Brunswickoba</option>
                  <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                  <option value="Northwest Territories">Northwest Territories</option>
                  <option value="Nova Scotia">Nova Scotia</option>
                  <option value="Nunavut">Nunavut</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Prince Edward Island">Prince Edward Island</option>
                  <option value="Quebec">Manitoba</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Yukon">Yukon</option>
                </select>
              </div>
            

            <div className="f1-ns f5 f3-m">
              <p>Payment Method</p>
            </div>

              {/* this is the cc number field */}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="cc">Credit Card Number*</label>
                <input value={values.cc} onChange={set('cc')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-40 measure" type="text" name="ccNumber" id="ccNumber"  required="required"/>
                <p style={{color: 'red'}}>{values.ccError}</p>
              </div>

            {/*this is to keep expiry date and cvv on one line */}
            <div className = "center justify-center">
                {/* this is the expiry date field date needs to be not hardcoded*/}
              <div>
                <label className="db fw4 lh-copy f6" htmlFor="cardExpiration">Expiry Date*</label>
                <input value={values.exp} onChange={set('exp')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-30-m w-30 w-10-ns measure" type="text" name="expirationDate" id="expirationDate"  required="required" placeholder="MM/YYYY"/>
                <p style={{color: 'red'}}>{values.expError}</p>
              </div>
              {/* this is the cvv field*/}
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="cvv">CVV*</label>
                <input value={values.cvv} onChange={set('cvv')} className="pa2 br3 input-reset ba bg-transparent hover-bg-white w-20 w-10-ns measure" type="text" name="cvv" id="cvv"  required="required"/>
                <p style={{color: 'red'}}>{values.cvvError}</p>
              </div>
            </div>
          
                {/*this is the submit button */}
            <div className="mt3"><input className="b ph3 pv2 input-reset ba br4 b--black bg-lightblue hover-bg-white grow pointer f6 w-15 measure black" type="button" onClick={submitHandler} defaultValue="Sign Up" /></div>
          </form>

              <p style={{color: values.success ? 'green' : 'red'}}>{values.success ? values.success : values.error}</p>

          <a href="/business/login" className="pa2 br4 f6 link dim black db">Already have an account? Sign in</a>   
    </div>
  </div>
  )//return

}//business sign up

export default BusinessSignUp;