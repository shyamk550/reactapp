import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="container valign-wrapper">
        <div
          className="row"
          style={{
            paddingTop: "50px",
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
          }}
        >
          <div className="col s12 center-align">
            {/* <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4> */}
            {/* <p className="flow-text grey-text text-darken-1">
             This is a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p> */}
            <p className="flow-text grey-text text-darken-1">
              Welcome! <br />
              Please click the below
            </p>
            <br />
            {/* <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Log In
              </Link>
            </div>
            <br /> */}

            <div className="col s12">
              <Link
                to="/movieslist"
                style={{
                  marginTop: "5px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 center"
              >
                ViewMovies
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Landing);
