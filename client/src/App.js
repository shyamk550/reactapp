import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import MoviesList from "./components/dashboard/MoviesList";
import Users from "./components/dashboard/Users";

import "./App.css";
import ContactUs from "./components/misc/ContactUs";
import AboutUs from "./components/misc/Aboutus";
import UserAccount from "./components/account/UserAccount";
import AccountDetails from "./components/account/AccountDetails";
import AddMovie from "./components/movies/AddMovie";
import EditMovie from "./components/movies/EditMovie";

import AdminRoute from "./components/private-route/AdminRoute";
const photos = { src: "/images/img1.jpg" };

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div
            style={
              {
                // backgroundImage: `url(${photos.src})`
              }
            }
            className="App"
          >
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/useraccount" component={UserAccount} />
              <Route exact path="/movieslist" component={MoviesList} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/accountdetails"
                component={AccountDetails}
              />
              <AdminRoute exact path="/addmovie" component={AddMovie} />
              <AdminRoute exact path="/users" component={Users} />
              <AdminRoute exact path="/editmovie" component={EditMovie} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
