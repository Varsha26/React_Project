import React, { Fragment, useEffect } from "react";
import "./App.css";
import  Navbar  from "./components/layers/Navbar";
import  Landing  from "./components/layers/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layers/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post"
if (localStorage.token) {
    setAuthToken(localStorage.token);
}
const App = () => {
    useEffect( ()=> {
        store.dispatch(loadUser());
    }, [loadUser])// [] to run only once 
    return (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Navbar />
                <Route exact path="/" component={Landing} />
                <section className="container">
                    <Alert />
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path='/profiles' component={Profiles} />
                        <Route exact path='/profile/:id' component={Profile} />
                        <PrivateRoute exact path='/dashboard' comp={Dashboard} />
                        <PrivateRoute exact path='/create-profile' comp={CreateProfile} />
                        <PrivateRoute exact path='/edit-profile' comp={EditProfile} />
                        <PrivateRoute exact path='/add-experience' comp={AddExperience} />
                        <PrivateRoute exact path='/add-education' comp={AddEducation} />
                        <PrivateRoute exact path='/posts' comp={Posts} />
                        <PrivateRoute exact path='/posts/:id' comp={Post} />
                    </Switch>
                </section>
            </Fragment>
        </Router>
    </Provider>

)};
export default App;