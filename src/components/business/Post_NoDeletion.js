import React from 'react';
import filler from '../home/photos/menuItem.jpg';
import BusinessNavigation from './BusinessNavigation';

class Post_NoDeletion extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         //   type: "Post", //type of post, could be discount, showcase, etc
            title: "title",
            text: "test_content",
            postID: ""
        }
    }



    //if we are given an array of links for the feed, we process everything here.
    fetchval(IN){
        fetch(IN)
            .then(response => response.json())
            .then(data => this.setState({text:data.message}))
            .catch(()=>console.log("fetch error at " + IN))
    }

    componentDidMount(){
        this.fetchval("");
    }

    render(){
        return(
            <div>
                <form class = "pb3 ph3">
                    <div class = "center mw5 mw6-m mw7-ns">
                        <div className="tl fw6 f4 ph3 pv2 bb">{this.state.title}</div>
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
export default Post_NoDeletion;