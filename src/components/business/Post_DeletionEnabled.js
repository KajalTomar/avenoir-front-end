import React from 'react';
import filler from '../home/photos/menuItem.jpg';
import BusinessNavigation from './BusinessNavigation';

class Post_DeletionEnabled extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         //   type: "Post", //type of post, could be discount, showcase, etc
            postID: "",
            title: "title",
            text: "test_content"
        }
    }

    deletepostaction(){
        fetch('https://authentic-uoft.herokuapp.com/business/delete/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : window.localStorage.getItem('token'),
            },
            body: JSON.stringify({
                id: this.state.postID,
            })
        }).catch(function(error){
            console.log(error);
        })
    }


    componentDidMount(){
        this.fetchval("");
    }

    render(){
        return(
            <div>
                <form class = "pb3 ph3">
                    <div class = "center outline mw5 mw6-m mw7-ns">
                        <div class = "flex justify-between items-center bb">
                            <div className="tl fw6 f4 ph3 pa2">{this.state.title}</div>
                            <div className="ph2 pt1">
                                <div className="dim f7 f6-ns ba pa1 mb1 dib red" onClick = "this.deletepostaction()">Delete Post</div>
                            </div>
                        </div>
                        <div>
                            <div className = "f4 f3-m f2-ns ph4 pb3 pt2">
                                <div class = "tl tj-ns fw6"> {this.state.text} </div>
                            </div>
                        </div>
                        </div>
                </form>
            </div>
        )
    }

}
export default Post_DeletionEnabled;