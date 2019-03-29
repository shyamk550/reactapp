import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class NavLogincheck extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <div>
          <button
            style={{ width: "140px" }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable grey accent-3"
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Link
            to="/login"
            style={{
              width: "140px"
            }}
            className="btn btn-large waves-effect waves-light hoverable grey accent-3"
          >
            Log In
          </Link>
        </div>
      );
    }
  }
}
NavLogincheck.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavLogincheck);
