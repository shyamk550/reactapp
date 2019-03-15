import React from 'react'

export default class Users extends React.Component{
    constructor(){
      super();
      
      this.state = {
        users: [],
      }
    }
    
    componentDidMount(){
        fetch('/api/users/getusers')
        .then(response => response.json())
        .then(data => this.setState({ users: data }));

       
    }
    
    render(){
      
      return(
        <div className="table-responsive">
        <h4> Here are the list of users registered</h4>
          <table className="t01" >
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
               
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user)=>(
                <tr  key={user.id}>
                  <th scope="row"></th>
                  <td> {user.name} </td>
                  <td> {user.email} </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }