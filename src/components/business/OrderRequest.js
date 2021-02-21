import React, {useState} from 'react';
import defaultProfile from '../home/photos/defaultProfile.png';
import Post_NoDeletion from './Post_NoDeletion';


const OrderRequest = () => {
    const [values, setValues] = useState({
        postID: null,
        userID: null,
        specialrequest: "loading...",
        businesscomment: ""
    });

    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value, success: null, error: null}));
        }
    };

    const Acceptrequest = () => {
        var validated = true;
        if (values.businesscomment == '') validated = false;
        if(validated){
            fetch('https://authentic-uoft.herokuapp.com/business/acceptRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : window.localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    postId: values.postID,
                    userId: values.userID
                })
            }).catch(function(error){
                    console.log(error);
            })
        }
    }

    const Rejectrequest = () => {
        var validated = true;
        if (values.businesscomment == '') validated = false;
        if(validated){
            fetch('https://authentic-uoft.herokuapp.com/business/rejectRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : window.localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    postId: values.postID,
                    userId: values.userID,
                    comments: values.businesscomment
                })
            }).catch(function(error){
                console.log(error);
            })
        }
    }

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
            <div className="ph3 pt2">{new Post_NoDeletion().render()}</div>

            {/* this div will hold the special request info for the order */}
            <div className="ba flex items-center justify-center mh4">
                <p className = "f4 ph3">{values.specialrequest} </p>
            </div>

            {/* this div will hold the accept and reject buttons */}
            <div className="flex items-center justify-center">

                {/* accept button */}
                <div className="pa1 ">
                    <a class="link  f5 f4-m f2-ns dim ba ph3 pv2 mb2 dib green" type = "button"  onClick = {Acceptrequest}>Accept</a>
                </div>

                {/* reject button */}
                <div className="pa1">
                    <a class="link dim f5 f4-m f2-ns ba ph3 pv2 mb2 dib red" type = "button" onClick = {Rejectrequest}>Reject</a>
                </div>
            </div>
            <div className="ba flex items-center justify-center mh4">
                <textarea style={{resize: 'vertical'}} className = "ba b--black-20 pa2 mb2 db w-100" value={values.businesscomment} onChange={set('businesscomment')}/>
            </div>
        </div>
    )

}
export default OrderRequest;