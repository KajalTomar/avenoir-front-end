import React from 'react';
import filler from '../home/photos/menuItem.jpg';
import Post_NoDeletion from '../business/Post_NoDeletion';
import defaultProfile from "../home/photos/chef.png";
import UserNavigation from "./UserNavigation";
import orderIcon from "../home/photos/orderIcon.png";

class Post_UserVersion extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         //   type: "Post", //type of post, could be discount, showcase, etc
            submit_text: "",
            posterLink: "",
            posterName: "Loading... ",
            posterIMG: null,
            opensubmitbox: false,
            toEmail: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    updatepoststate = () =>{
        this.setState({opensubmitbox:!this.state.opensubmitbox});
    }

    handleTextChange(event){
        this.setState(
            {submit_text: event.target.value}
        );
    }

    buttonrendercheck = () => {
        if(this.state.opensubmitbox == false) return (
            <div className="center dim f6 f5-ns ba ph3 pv2 dib black no-underline" type="button" onClick={this.updatepoststate}>
                Place an order
            </div>
        );
        else {
            return (
            <div className="center dim f6 f5-ns ba ph3 pv2 dib red no-underline" type="button" onClick={this.updatepoststate}>
                Cancel
            </div>
        );}
    }

    submitboxrendercheck = (title, postDesc) =>{
        if(this.state.opensubmitbox == false) return (<div></div>)
        return (
            <div>
                <div className = "ph3">
                    <div className = "tl f4-ns f5 fw6 pb2">Enter special requests for company</div>
                    <textarea style={{resize: 'vertical'}} className = "ba b--black-20 pa2 mb2 db w-100" value={this.state.submit_text} onChange={this.handleTextChange}/>
                    <div className = "pb3">
                        <div className="center dim f6 f5-ns ba ph3 pv2 dib black no-underline" type="button" onClick={this.sendspecialrequest.bind(this, title, postDesc)}>
                            Submit your order
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    sendspecialrequest = (title, postDesc) =>{
        const description = this.state.submit_text
        const toEmail = this.state.toEmail
        console.log( title, description, toEmail)
        fetch('https://authentic-uoft.herokuapp.com/utility/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : window.localStorage.getItem('token'),
                Accept: 'application/json'
            },
            body: JSON.stringify({
                description: description,
                title,
                email: toEmail,
                postDesc
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount(){
        this.setState({
            toEmail: this.props.postedBy.Email
        })
    }

    render(){
        return (
            this.props.posts.map((ele, index) => {
                return (
                    <div className = "pv3">
                        <div className="center ba mw7">
                            {/* this div will hold the businesses picture and name*/}
                            <div className="flex items-center justify-center">
                                <img src={this.props.postedBy.ProfilePic} className="w-10 w3-m w3-ns flex items-center pv3 ph2" img align="left"
                                     alt="profilePicture"></img>
                                {/* this href needs to be updated to go to the users quickview page with rating and such */}
                                <a className="f5 f4-m f2-ns link dim ph1 pv1 mb2 dib black" href="/user/UserViewProfile">{this.props.postedBy.CompanyName}</a>
                                <p>{this.props.posts.PostedAt}</p>
                            </div>
                            <div>
                                <form className="pb3 ph3">
                                    <div className="center mw5 mw6-m mw7-ns">
                                        <div className="tl fw6 f4 ph3 pv2 bb">{ele.PostTitle}</div>
                                        <div>
                                            <div className="f4 f3-m f2-ns ph4 pb3 pt2">
                                                <div className="tl tj-ns fw6"> {ele.Description} </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*Double div. First layer is to space out the button, the second one defines the borders of it*/}
                            <div className = "pb3">
                                {this.buttonrendercheck()}
                            </div>
                            {this.submitboxrendercheck(ele.PostTitle, ele.Description)}
                        </div>
                    </div>
                )
            })
        )

    }

}
export default Post_UserVersion;