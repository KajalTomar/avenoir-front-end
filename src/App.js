import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import UserNavigation from './components/user/UserNavigation';
import Footer from './components/Footer';
import UserLogin from './components/user/UserLogin';
import UserSignUp from './components/user/UserSignUp';
import Developers from './components/home/Developers';
import BusinessLogin from "./components/business/BusinessLogin"
import BusinessSignUp from "./components/business/BusinessSignUp"
import Post_MakeNew from "./components/business/Post_MakeNew";
import Post_UserVersion from "./components/user/Post_UserVersion";
import Post_DeletionEnabled from "./components/business/Post_DeletionEnabled";
import UserEmailVerified from "./components/user/UserEmailVerified"
import BusinessEmailVerified from "./components/business/BusinessEmailVerified"
import UserPasswordReset from "./components/user/UserPasswordReset"
import UserProfile from "./components/user/UserProfile"
import BusinessPasswordReset from "./components/business/BusinessPasswordReset"
import BusinessProfile from "./components/business/BusinessProfile"
import UserOrders from "./components/user/UserOrders"
import BusinessAcceptedOrders from "./components/business/BusinessAcceptedOrders"
import BusinessMenu from "./components/business/BusinessMenu"
import Welcome from './components/home/Welcome';
import UserHome from './components/user/UserHome';
import BusinessHome from './components/business/BusinessHome';
import ReviewCustomer from './components/business/ReviewCustomer';
import ReviewBusiness from './components/user/ReviewBusiness';
import BusinessViewProfile from './components/business/BusinessViewProfile';
import UserViewProfile from './components/user/UserViewProfile';
import Accepted from './components/business/Accepted'
import Rejected from './components/business/Rejected'



class App extends Component {

  constructor(){
    super();
  }

  //I'm not very sure about this structure. Is it supposed to be this direct?
    //would encapsulating the signup/login into a single selection component be better?
render(){
    return (

        <div className="App">
            <Router>
                <div>
                    <Route exact path="/">
                        <Welcome/>
                    </Route>

                    {/* USER ROUTES */}
                    <Route exact path="/acceptOrder">
                        <Accepted />
                    </Route>
                    <Route exact path="/rejectOrder">
                        <Rejected />
                    </Route>
                    <div>
                        <Route exact path="/user/home">
                            <UserHome/>
                        </Route>
                        <Route exact path="/user/signup">    
                            <UserSignUp/>
                        </Route>
                        <Route exact path="/user/verify">
                            <UserEmailVerified/>
                        </Route>
                        <Route exact path="/user/login">
                            <UserLogin />
                        </Route>
                        <Route exact path="/user/profile">
                            <UserProfile/>
                        </Route>
                            <Route exact path="/user/orders">
                            <UserOrders/>
                        </Route> 
                        <Route exact path="/user/reset">
                            <UserPasswordReset/>
                        </Route>
                   <Route exact path="/user/ReviewBusiness">
                        <ReviewBusiness/>
                    </Route> 
                    <Route exact path="/user/UserViewProfile">
                        <UserViewProfile/>
                    </Route>
                        <Route exact path= "/user/USERPOST">
                            <Post_UserVersion/>
                        </Route>
                    </div>
                    {/* BUSINESS ROUTES */}
              
                    <Route exact path="/business/home">
                        <BusinessHome/>
                    </Route>
                    <Route exact path="/business/signup">
                        <BusinessSignUp />
                    </Route>
                    <Route exact path="/verifyBusiness">
                        <BusinessEmailVerified/>
                    </Route>
                    <Route exact path="/business/login">
                        <BusinessLogin/>
                    </Route>
                    <Route exact path="/business/reset">
                        <BusinessPasswordReset/>
                    </Route>
                    <Route exact path="/business/profile">
                        <BusinessProfile/>
                    </Route>
                    <Route exact path="/business/menu">
                        <BusinessMenu/>
                    </Route>
                    <Route exact path="/business/acceptedOrders">
                        <BusinessAcceptedOrders/>
                    </Route> 
                    <Route exact path="/business/WritePost">
                        <Post_MakeNew/>
                    </Route>
                   <Route exact path="/business/reviewCustomer">
                        <ReviewCustomer/>
                    </Route>
                    <Route exact path="/business/ViewProfile">
                        <BusinessViewProfile/>
                    </Route>
                    <Route exact path="/user/Post_UserVersion">
                        <Post_UserVersion/>
                    </Route>

                    {/* OTHER ROUTES */}

                    <Route exact path="/developers">
                        <Developers/>
                    </Route>     
                </div>
            </Router>
            <Footer/>

        </div>
    );
  }

}

export default App;
