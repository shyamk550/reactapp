import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UserAccount extends Component {


    render() {
        
      if (this.props.auth.isAuthenticated) {
        return (
          <div>
            <li> <Link to="/accountdetails" className=""> Your account </Link></li>
         </div>
        )
      }
      else {
        return (
  <>
  </>
        )
      }
    }
  }
  UserAccount.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
  )(UserAccount);
  
  