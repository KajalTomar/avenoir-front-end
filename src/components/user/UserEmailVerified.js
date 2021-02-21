import React from 'react';
import DefaultNavigation from '../home/DefaultNavigation'

//does not appear to be needed but it was in the content i copied from.
let URL = ""

class UserEmailVerified extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "Email verification pending",
            text: "Verifying......"
        }
    }

	componentDidMount(){
	    console.log(this.props)
	    const token = (new URLSearchParams(window.location.search)).get("token")
        fetch(`https://authentic-uoft.herokuapp.com/auth/user/verifyemail?id=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
        .then(res => res.json())
        .then(data => {
        if(data.message){
                    this.setState({
                        title: 'Email verified successfully',
                        text: null
                    })
        } else {
            this.setState({
                        title: 'Email verification failed',
                        text: null
                    })
        }

        })
        .catch(err => {
            console.log(err)
        })
	}
    
render(){
       
    return(
        <div>
            <DefaultNavigation/>
            <div> 
                <article className="tc pa3 pa5-ns">
                    <h1 className="tc f3 f2-m f1-l">{this.state.title}</h1>
                    <p className="tc lh-copy">{this.state.text}</p>
                </article>

                <p>{this.state.title}</p>
                <p>{this.state.text}</p>
                <a class="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 mb3"
                    href="/userlogin">
                    Login
                </a>
            </div>
        </div>
    )
}
}

export default UserEmailVerified;