import React, {Component} from 'react';
import UserNavigation from './UserNavigation';
import Post_UserVersion from './Post_UserVersion';


class UserHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            listOfBusiness: [],
            feed: []
        }
    }

    componentDidMount() {
        fetch('https://authentic-uoft.herokuapp.com/utility/feed/get', {
        headers: {
                'Content-Type': 'application/json',
                'Authorization' : window.localStorage.getItem('token'),
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.message){
                    this.setState({
                        feed: data.message
                    })
                } else {

                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    set = name => {
        return ({ target: { value } }) => {
            this.setState({
                query: value
            }, () => {
                fetch(`https://authentic-uoft.herokuapp.com/utility/search/business?search=${this.state.query}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : window.localStorage.getItem('token'),
                        Accept: 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.message){
                            // success
                            this.setState({
                                listOfBusiness: data.message
                            })
                        } else {
                            // error
                        }
                        console.log(data)
                    })
                    .catch(err => {
                        // err
                        console.log(err)
                    })
            })
            // setValues(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
        }
    };

    followHandler(id) {
        console.log(`I want to follow ${id}`)
        fetch('https://authentic-uoft.herokuapp.com/utility/user/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : window.localStorage.getItem('token'),
                Accept: 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log('Data from the backend', data)
            })
            .catch(err => {
                console.log('There was some error ', err)
            })
    }


	render(){
        return(
            <div className="justify center">
            <UserNavigation/>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="search">Search</label>
                    <input value={this.state.query} onChange={this.set('query')} className="pa2 input-reset ba w-30 black" type="text" name="-search" id="search" placeholder="Please enter desired country of origin:"/>
                </div>
                <h2>Search results</h2>
                {
                    this.state.listOfBusiness.map(ele => {
                        return (
                            <div style={{'border': '2px solid black'}}>
                                <img src={ele.ProfilePic}></img>
                                <h1>{ele.CompanyName}</h1>
                                <p>{ele.Speciality}</p>
                                <button onClick={this.followHandler.bind(this, ele.Email)}>Follow</button>
                            </div>
                        )
                    })
                }
                <h2>Feed</h2>
                {
                    this.state.feed.map((elem, index) => {
                        return <Post_UserVersion postedBy={elem.PostedBy} posts={elem.Posts} />
                    })
                }
                <p>This will be where the order status is shown</p>
            </div>
        );
    }   
}

export default UserHome;
