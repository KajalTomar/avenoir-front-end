import React from 'react';

class Accepted extends React.Component{
    //no idea how to get the class
    constructor(props) {
        super(props)
        this.state = {
            text:''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
    }


    handleTextChange(event){
        this.setState(
            {text: event.target.value}
        );
    }

    submittext = () =>{
        const token = (new URLSearchParams(window.location.search)).get("token")
        if(true){
            fetch('https://authentic-uoft.herokuapp.com/utility/acceptOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : window.localStorage.getItem('token'),
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    description: this.state.text,
                    token
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Order successfully accepted', data)

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
                       
                        <label className="tl db fw4 lh-copy f4">Description</label>
                        <textarea style={{resize: 'vertical'}} className="ba b--black-20 pa2 mb2 db w-100" value={this.state.text} onChange={this.handleTextChange}/>
                    </div>
                    <div className="center dim f6 f5-ns ba ph3 pv2 dib green no-underline" type="button" onClick={this.submittext}>
                        Accept
                    </div>
                </div>
            </div>
         )

    }


};

export default Accepted;