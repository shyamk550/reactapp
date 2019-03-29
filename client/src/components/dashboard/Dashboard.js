import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Users from "./Users";
import MoviesList from "./MoviesList";
import { Link } from "react-router-dom";

import "../../App.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  _handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    if (user.isAdmin) {
      return (
        <div style={{ paddingTop: 50 }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 left-align">
              <Link to="/addmovie" className="waves-effect waves-light btn ">
                Add Movie{" "}
              </Link>
              &nbsp;
              <Link to="/movieslist" className="waves-effect waves-light btn ">
                View Movies
              </Link>
              &nbsp;
              <Link to="/users" className="waves-effect waves-light btn ">
                View Users
              </Link>
              <br />
              <br />
              <Link to="/editmovie" className="waves-effect waves-light btn ">
                Search Movie
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 left-align">
              {/* <h5>
                    <b>Hey there,</b> {user.name.split(" ")[0]}
                                       
               </h5> */}

              <MoviesList />

              {/* <div className="myImage">
                     </div>                  */}
            </div>
          </div>
        </div>
      );
    }
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
