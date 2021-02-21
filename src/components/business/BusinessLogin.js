import React, {useState} from 'react';
import DefaultNavigation from '../home/DefaultNavigation'

const BusinessLogin = () => {
    const [state, setState] = useState({
        email: null,
        emailError: null,
        password: null,
        passwordError: null,
        success: null,
        error: null
    });

    const set = name => {
        return ({ target: { value } }) => {
            setState(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
        }
    };

    const submitHandler = () => {
        set(oldValues => ({...oldValues, success: null, error: null }));

        let validated = true
        {state.emailError = null};
        {state.passwordError = null};
 

        if(!state.email){
            setState(oldValues => ({...oldValues, email: null, emailError: 'You cannot leave username field empty'}));
            validated = false
        }
        if(!state.password){
            setState(oldValues => ({...oldValues, password: null, passwordError: 'You cannot leave password field empty'}));
            validated = false
        }
        if(validated){
            fetch('https://authentic-uoft.herokuapp.com/auth/business/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: state.email,
                    password: state.password,
                })
            })
                .then(res => res.json())
                .then(data => {
                    if(data.token){
                        window.localStorage.setItem('token', data.token)
                        // success - write the code what happens on success below this line
                        console.log('Message :', data.message)
                        //now redirect
                        window.location.href="home"
                    } else {
                        setState(oldValues => ({...oldValues, error: 'Email or Password incorrect. Please try again or sign up.'}));
                        console.log('Error from the backend side ', data.error)
                    }
                })
                .catch(err => {
                    // error - write the code what happens on error below this line
                        setState(oldValues => ({...oldValues, error: 'We encountered an error. Please try again.'}));
                    console.log('App crashed ', err)
                })
        }

    }

	return(
        <div>
            <DefaultNavigation/>
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1-ns f2 f3-m fw6 ph0 mh0">Business Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input value={state.email} onChange={set('email')} className="pa2 br4 input-reset ba hover-black w-100" type="email" name="email-address" id="email-address" />
                            <p style={{color: 'red'}}>{state.userNameError}</p>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input value={state.password} onChange={set('password')} className="b br4 pa2 input-reset ba hover-black w-100" type="password" name="password" id="password" />
                            <p style={{color: 'red'}}>{state.passwordError}</p>
                        </div>
                    </fieldset>
                    <div className>
                        <input onClick={submitHandler} className="b ph3 pv2 br4 input-reset ba b--black bg-lightblue hover-bg-white grow pointer f6 dib" type="button" defaultValue="Sign in" />
                        <p style={{color: state.success ? 'green' : 'red'}}>{state.success ? state.success : state.error}</p>
                    </div>
                    <div className="lh-copy mt3">
                        <a href="/business/signup" className="f6 link dim black db">Sign up</a>
                        <a href="/business/reset" className="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </main>
        </div>
    ) //return
} //login

export default BusinessLogin;