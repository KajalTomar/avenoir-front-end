import React, {useState}  from 'react';
import DefaultNavigation from '../home/DefaultNavigation'

const BusinessPasswordReset = () => {

    const [state, setState] = useState({
        userEmail: '',
        success: null,
        error: null
    });

    const set = name => {
        return ({ target: { value } }) => {
            setState(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
        }
    };

    const submitHandler = () => {
        fetch('https://authentic-uoft.herokuapp.com/auth/bussiness/forgotPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: state.userEmail,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Message :', data)
        })
        .catch(err => {
            console.log('Error :', err)
        })
    }

	return(
        <div>
            <DefaultNavigation/>
            <div className='ma4'>
                <article className="br3 ba b--black-10  mv4 mw-100 w-50-m w-25-l mw6 shadow-5 center">
                    <form className="pa4 measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1-ns f2 f3-m fw6 ph0 mh0">Business Password Reset</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-white hover-black w-100" type="email" value={state.userEmail} onChange={set('userEmail')} name="email-address"   id="email-address"/>
                        </div>
                        </fieldset>
                        <div className="pt2">
                        <input onClick={submitHandler} className="b ph4 pv2 input-reset ba b--black bg-lightblue hover-bg-white grow pointer f6 dib black" type="button" value="Reset Password"/>
                        <input className="b ph4 pv2 input-reset ba b--black bg-lightblue hover-bg-white grow pointer f6 dib black" type="submit" value="Reset Password"/>
                        </div>
                        <div className="lh-copy mt3 pt3">
                        <a href="/business/signup" className="f6 link dim black db">Sign up</a>
                        <a href="/business/login" className="pa2 f6 link dim black db"> Sign in</a> 
                        </div>
                    </form>
                </article>
            </div>
        </div>
	)
}

export default BusinessPasswordReset;