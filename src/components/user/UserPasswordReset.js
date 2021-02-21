import React, {useState} from 'react';
import DefaultNavigation from '../home/DefaultNavigation'

const UserPasswordReset = () => {
    const [state, setState] = useState({
        email: null,
        emailError: null,
        success: null,
        error: null
    });

    const set = name => {
        return ({ target: { value } }) => {
            setState(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
        }
    };

    const submitHandler = () => {
        let validated = true;
        // fix the validation here
        if(state.email.length === 0){
            setState(oldValues => ({...oldValues, userName: null, userNameError: 'You cannot leave email field empty'}));
        }
        fetch('https://authentic-uoft.herokuapp.com/auth/user/forgotpassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: state.email
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data.message){
                    console.log('Success from message')
                    console.log(data.message)
                    // show success on UI and tell the user that email has been sent with the new password
                } else {
                    console.log('Error from backend ', data)
                    // show error on UI
                }
            })
            .catch(err => {
                console.log('Error', err)
                // show error on UI
            })
    }


	return(
        <div>
            <DefaultNavigation/>
            <div className='ma4'>
                <article className="br3 ba b--black-10  mv4 mw-100 w-50-m w-25-l mw6 shadow-5 center">
                    <form className="pa4 measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 pv3 mh0">Request a new password</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input value={state.email} onChange={set('email')} className="pa2 input-reset ba bg-white hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        </fieldset>
                        <div className="pt2">
                            <input onClick={submitHandler} className="b ph4 pv2 input-reset ba b--black bg-lightblue hover-bg-white grow pointer f6 dib black" type="button" value="Reset Password"/>
                        </div>
                        <div className="lh-copy mt3 pt3">
                        <a href="/user/signup" className="f6 link dim black db">Sign up</a>
                        </div>
                    </form>
                </article>
            </div>
        </div>
	);
}

export default UserPasswordReset;