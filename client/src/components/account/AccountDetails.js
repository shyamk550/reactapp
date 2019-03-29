import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/authActions";

class AccountDetails extends Component {
  constructor() {
    super();    
    this.onChange = this.onChange.bind(this);
    this.state = {
      name:"",
      email:""
    };
}
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    onSubmit = e =>{
      e.preventDefault();
      const name = this.getName.value;
      const email = this.getEmail.value;
      const id = this.props.auth.user.id;
      const data = {id,name,email}

      this.props.updateUser(data, this.props.history);
    }

 render() {
    const { user } = this.props.auth;
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
          <h4 align="center">Update your Profile</h4>
          
              <div style={{ marginTop: 0 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input  id="name" type="text" className="form-control" 
                     ref={(input) => this.getName = input}
                    onChange={this.onChange} defaultValue={user.name}/>
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input  id="email" type="text" className="form-control" 
                      ref={(input) => this.getEmail = input}
                      onChange={this.onChange} defaultValue={user.email}/>
                </div>
               <div className="form-group">
                    <input type="submit"  value="Update Profile"   className="btn btn-primary"/>
                </div>
            </form>
            </div>
        </div>
      </div>
       
      </div>
    )
  }
}


AccountDetails.propTypes = {
  updateUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,

    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors

  });
  
  export default connect(
    mapStateToProps,{updateUser}
  )(AccountDetails);
  