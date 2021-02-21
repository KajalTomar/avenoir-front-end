import React, {useState} from 'react';
import DefaultNavigation from '../home/DefaultNavigation'

const UserLogin = () => {
    const [state, setState] = useState({
        userName: '',
        userNameError: null,
        password: '',
        passwordError: null,
        success: null,
        error: null,
        text: ""
    });

    const set = name => {
        return ({ target: { value } }) => {
            setState(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
        }
    };

    const submitHandler = () => {
        let validated = true
        {state.userNameError = null};
        {state.passwordError = null};
        if(state.userName.length === 0){
            setState(oldValues => ({...oldValues, userNameError: 'You cannot leave email field empty'}));
            validated = false
        }
        if(state.password.length === 0){
            setState(oldValues => ({...oldValues, passwordError: 'You cannot leave password field empty'}));
            validated = false
        }
        if(validated){
            fetch('https://authentic-uoft.herokuapp.com/auth/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: state.userName,
                    password: state.password,
                })
            })
                .then(res => res.json())
                .then(data => {
                    if(data.token){
                        window.localStorage.setItem('token', data.token)
                        // success - write the code what happens on success below this line
                        setState(oldValues => ({...oldValues, text:data.message   }));
                        console.log(data.message);
                        window.location.href="home"
                    } else {
                        // error - write the code what happens on error below this line
                        setState(oldValues => ({...oldValues, text:data.error  } ) );
                    }
                })
                .catch(err => {
                    // error - write the code what happens on error below this line
                    console.log("app crashed");
                    setState(oldValues => ({...oldValues, userName: null, text: 'We encountered an error, please try again.'}));
                })
        }

    }
	return(
        <div className="justify center">
            <DefaultNavigation/>
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1-ns f2 f3-m fw6 ph0 mh0">User Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input value={state.userName} onChange={set('userName')} className="pa2 br4 input-reset ba hover-black w-100" type="email" name="email-address" id="email-address" />
                            <p style={{color: 'red'}}>{state.userNameError}</p>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input value={state.password} onChange={set('password')} className="b pa2 br4 input-reset ba hover-black w-100" type="password" name="password" id="password" />
                            <p style={{color: 'red'}}>{state.passwordError}</p>
                        </div>
                    </fieldset>
                    <p className="center mw5 mw6-m mw7-ns">{state.text}</p>
                    <div className>
                        <input onClick={submitHandler} className="b ph3 pv2 b4 input-reset ba b--black bg-lightblue hover-bg-white grow pointer f6 dib" type="button" defaultValue="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="/user/signup" className="f6 link dim black db">Sign up</a>
                        <a href="/user/reset" className="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default UserLogin;