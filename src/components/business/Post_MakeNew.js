import React from 'react';
import Post_NoDeletion from './Post_NoDeletion';
import BusinessNavigation from './BusinessNavigation';

class Post_MakeNew extends React.Component{
    //no idea how to get the class
    constructor(props) {
        super(props)
        this.state = {
            text:'',
            title:''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }



    handleTitleChange(event){
        this.setState(
            {title: event.target.value}
            );
    }
    handleTextChange(event){
        this.setState(
            {text: event.target.value}
        );
    }

    submittext = () =>{
        console.log("trying to submit post")
        var validated = true;
        if (this.state.text == '') validated = false;
        if (this.state.title == '') validated = false;
        if(validated){
            fetch('https://authentic-uoft.herokuapp.com/business/addpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : window.localStorage.getItem('token'),
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    postTitle: this.state.title,
                    description: this.state.text
                })
            })
                .then(res => res.json())
                .then(data => {

                    if(data.message){
                        // success

                    } else {
                        // error
                    }
                })
                .catch(function(error){
                    // error
                });
        }
    }


    render(){
        return(
            <div>
                <div className = "center pb3 mw5 mw6-m mw7-ns">
                    {/*  <div className = "f1 pv4">Write a post</div>*/}
                    <div className="pb1">
                        <label className="tl db fw4 lh-copy f4" >Title</label>
                        <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                        <label className="tl db fw4 lh-copy f4">Text</label>
                        <textarea style={{resize: 'vertical'}} className = "ba b--black-20 pa2 mb2 db w-100" value={this.state.text} onChange={this.handleTextChange}/>
                    </div>
                    <div className="center dim f6 f5-ns ba ph3 pv2 dib green no-underline" type="button" onClick={this.submittext}>
                        Post
                    </div>
                </div>
            </div>
         )

    }


};

export default Post_MakeNew;