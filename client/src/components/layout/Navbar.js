import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavLogincheck from "./NavLogincheck";


class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark header ">
          <div className="container-fluid">
             <Link to="/" className="col s5 black-text brand-logo"><i className="material-icons">home</i>Home </Link>

            <ul className="navbar-nav mr-auto container ">
             <li> <Link to="/contactus" className=""> Contact Us </Link></li>
              <li className="right hide-on-med-and-down">
              <NavLogincheck />
              </li>
            </ul>
          </div>
        </nav> */}


            <nav>
                <div className=" black nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/" className=""><i className="material-icons">home</i></Link></li>
                <li> <Link to="/contactus" className=""> Contact Us </Link></li>
                <li> <Link to="/aboutus" className=""> About Us </Link></li>
                </ul>
                <ul className="right hide-on-med-and-down">
                  <li><NavLogincheck /></li>
                  </ul>
                </div>
              </nav> 
{/* 
 <div className="navbar-fixed">
    <nav className="black navbar navbar-expand-lg navbar-dark bg-dark header">
        <div className="container">
        <Link to="/" className="col s5 white-text brand-logo"><i className="material-icons">home</i>Home </Link>      


            <div className="nav-wrapper">
                <ul className="navbar-nav mr-auto container">
                <li> <Link to="/contactus" className=""> Contact Us </Link></li>
                <li> <Link to="/aboutus" className=""> About Us </Link></li>
              <li className="right hide-on-med-and-down">
              <NavLogincheck />
              </li>
                </ul>
            </div>
        </div>
    </nav>
</div>  */}
      </div>
    );
  }
}



Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);

