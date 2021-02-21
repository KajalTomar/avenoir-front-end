import React, {Component} from 'react';
import BusinessNavigation from './BusinessNavigation';
import OrderRequest from "./OrderRequest"
import defaultProfile from "../home/photos/defaultProfile.png";
import Post_NoDeletion from "./Post_NoDeletion";

class BusinessHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            linkedpostarray: []
        }
    }

    componentDidMount() {
        this.getPosts();
    }
    
    getPosts = () => {
        fetch('https://authentic-uoft.herokuapp.com/res/business/getAllRequests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token'),
            }
        })//fetch
            .then(res => res.json())
            .then(data => {
                //this.setState({ linkedpostarray:data });
                //console.log(this.state.linkedpostarray)
                console.log('List of posts ', data)
                if (data.message) {
                    this.setState({linkedpostarray: data.message})
                }
            })
            .catch(err => {
                console.log(err);
                // you're trying to access a page that doesn't exists
            })
    }



    set = name => {
        return ({ target: { value } }) => {
            this.state.setValue(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
        }
    };

    Acceptrequest = (postID, userID, comment) => {
        var validated = true;
        if (comment == '') validated = false;
        if(validated){
            fetch('https://authentic-uoft.herokuapp.com/res/business/acceptRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : window.localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    postId: postID,
                    userId: userID,
                    comment: comment
                })
            }).catch(function(error){
                console.log(error);
            })
        }
    }

    Rejectrequest = (postID, userID, comment) => {
        var validated = true;
        if (comment == '') validated = false;
        if(validated){
            fetch('https://authentic-uoft.herokuapp.com/res/business/rejectRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : window.localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    postId: postID,
                    userId: userID,
                    comments: comment
                })
            }).catch(function(error){
                console.log(error);
            })
        }
    }

	render(){
        return(
            <div className="justify center">
            <BusinessNavigation/>
                <p className="f1-ns f2 f3-m fw6 ph0 mh0">Home</p>
                {this.state.linkedpostarray.map(ele => {
                    return(
                    //this div will hold the entire customer order
                    <div className="flex ba w-80 w-50-m w-third-ns pa2 mv4 flex-column center justify-center">

                {/* this div will hold the customers picture and name*/}
                    <div className="flex items-center justify-center">
                    <img src={defaultProfile} class="w-20 flex items-center" img align="left" alt="profilePicture"></img>
                {/* this href needs to be updated to go to the users quickview page with rating and such */}
                    <a class="f5 f4-m f2-ns link dim ph1 pv1 mb2 dib black" href="/business/ViewProfile">Name</a>
                    </div>

                {/* this div will hold the business post info for the order */}
                {/*<div className="ba flex items-center justify-center mh4 pb2">
                {new Post_NoDeletion().render()}
            </div>*/}
                    <div className="ph3 pt2">{

                        <div>
                        <form className = "pb3 ph3">
                        <div className = "center mw5 mw6-m mw7-ns">
                        <div className="tl fw6 f4 ph3 pv2 bb">{ele.obj.title}</div>
                        <div>
                        <div className = "f4 f3-m f2-ns ph4 pb3 pt2">
                        <div className = "tl tj-ns fw6"> {ele.obj.text} </div>
                        </div>
                        </div>
                        </div>
                        </form>
                        </div>

                    }</div>

                {/* this div will hold the special request info for the order */}
                    <div className="ba flex items-center justify-center mh4">
                    <p className = "f4 ph3">{ele.specialrequest} </p>
                    </div>

                {/* this div will hold the accept and reject buttons */}
                    <div className="flex items-center justify-center">

                {/* accept button */}
                    <div className="pa1 ">
                    <a class="link  f5 f4-m f2-ns dim ba ph3 pv2 mb2 dib green" type = "button"  onClick = {this.Acceptrequest.bind(this,ele.postID,ele.userID)}>Accept</a>
                    </div>

                {/* reject button */}
                    <div className="pa1">
                    <a class="link dim f5 f4-m f2-ns ba ph3 pv2 mb2 dib red" type = "button" onClick = {this.Rejectrequest.bind(this,ele.postID,ele.userID)}>Reject</a>
                    </div>
                    </div>
                    <div className="ba flex items-center justify-center mh4">
                    <textarea style={{resize: 'vertical'}} className = "ba b--black-20 pa2 mb2 db w-100" value={ele.businesscomment} onChange={this.set.bind(ele,'businesscomment')}/>
                    </div>
                    </div>
                    )
                })}
            </div>
        );
    }   
}

export default BusinessHome;

