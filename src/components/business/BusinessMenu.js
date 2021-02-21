import React from 'react';
import Post_DeletionEnabled from './Post_DeletionEnabled';
import BusinessNavigation from './BusinessNavigation';
import Post_MakeNew from './Post_MakeNew';

let URL = ""; //endpoint for posts, unless I have to do the logic here


//This class manages a feed for businesses, where they can delete their content
class BusinessPostManager extends React.Component{
    constructor(props){
        super(props)
        //I'm not sure how we are going to return posts. For now, I assume we get endpoints to specific post data via an array.
        this.state = {
            linkedpostarray: [],
            viewNewPost: false,
            newpostinstance: new Post_MakeNew(),
            success: null,
            error: null
        }
    }

    //update the state that tracks whether they want to make a new post
    updatepoststate = () =>{
        this.setState({viewNewPost:!this.state.viewNewPost});
    }

    /* if they want to make a new postMessage, show the form to do so */
    newpostrendercheck = () =>{
        if (this.state.viewNewPost == true){
            return(
                <div>
                    <div className = "tl f2-ns f4 bb fw6">New Post</div>
                    <div className = "pb3"></div>
                    <Post_MakeNew/>
                    <div className = "tl f2-ns f4 bt fw6 pb4"></div>
                </div>
            );
        }
        else return (<div></div>);
    }

    /* this function determines whether the button shown says new post or cancel post */
    buttonstatechange = () => {
        if (this.state.viewNewPost == false) {
            return (
                <div type="button" className="center dim f6 f5-ns ba pa2 dib green no-underline" onClick={this.updatepoststate}>
                    New Post
                </div>
            )} else {
            return (
                <div type="button" className="center dim f6 f5-ns ba pa2 dib red no-underline" onClick={this.updatepoststate}>
                    Cancel Post
                </div>
            )}
    }

    componentDidMount(){
        this.getPosts()
    }

    deletepostaction = (postID) => {
        console.log('Post Id ', postID)
        fetch('https://authentic-uoft.herokuapp.com/business/delete/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : window.localStorage.getItem('token'),
            },
            body: JSON.stringify({
                id: postID,
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data.message){
                    // success
                    this.setState({ success:data.message })
                    console.log('Message  ',data)
                    if(data.message){
                        this.getPosts()
                    }
                } else {
                    // error
                    this.setState({ error: "That post has already been deleted" })
                }
            })
            .catch(function(error){
                console.log(error);
                // error
                this.setState({ error:"Backend failed" })
            })
    }

    //this function will fetch the posts that the business has active
    getPosts = () => {
        fetch('https://authentic-uoft.herokuapp.com/business/getpost', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : window.localStorage.getItem('token'),
                Accept: 'application/json'
            }
        })//fetch
            .then(res => res.json())
            .then(data => {
                //this.setState({ linkedpostarray:data });
                //console.log(this.state.linkedpostarray)
                console.log('List of posts ', data)
                if(data.message){
                    this.setState({ linkedpostarray: data.message})
                }
            })
            .catch(err => {
                console.log("yo we couldn't fetch the posts")

                // you're trying to access a page that doesn't exists
            })
    }//get posts

    render(){
        return(
            <div>
                <BusinessNavigation/>

                {/* this section shows the title, and handles the new post area */}
                <div className = "center flex flex-column mw5 mw6-m mw7-ns">
                    <article className = "cf">
                        <div className = "f1-ns f2 fw6 pa2">Business Menu</div>
                        <div className = "pv2 ph3 ">{this.buttonstatechange()}</div>
                    </article>
                    <div className = "ph3">{this.newpostrendercheck()}</div>

                    {/* this section will show all of the posts that the business currently has up */}
                    <div className = "tl pv2 ph3"><div className = "f2-ns f4 bb fw6">Posts</div></div>
                    {this.state.linkedpostarray.map(ele => {
                        return (
                            <div>
                                <form className="pb3 ph3">
                                    <div className="center outline mw5 mw6-m mw7-ns">
                                        <div className="flex justify-between items-center bb">
                                            <div className="tl fw6 f4 ph3 pa2">{ele.PostTitle}</div>
                                            <div className="ph2 pt1">
                                                <div className="dim f7 f6-ns ba pa1 mb1 dib red"
                                                     onClick={this.deletepostaction.bind(this,ele.PostId)}>Delete Post
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="f4 f3-m f2-ns ph4 pb3 pt2">
                                                <div className="tl tj-ns fw6"> {ele.Description} </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }


};

export default BusinessPostManager;

/*

<div>{(new Post_DeletionEnabled()).render()}</div>

*/