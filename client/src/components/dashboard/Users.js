import React from "react";
export default class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      search: "",
      userSearch: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch("/api/users/getusers")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  onChange = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };

  render() {
    let users = this.state.users.filter(user => {
      return user.name.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return (
      <div style={{ paddingTop: 10 }} className="container valign-wrapper">
        <div className="row">
          <div className="col table-responsive">
            <h4> Here are the list of users registered</h4>
            <h5>Please use the below text box to filter using name</h5>
            <input
              type="text"
              value={this.state.search}
              onChange={this.onChange}
            />
            <table className="t01">
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <th scope="row" />
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div class="col s6 ">  <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                          <label>Name:  </label>
                          <input  id="name" className="form-control" 
                          onChange={this.onChange} />
                      <input type="submit"  value="Search"   className="btn btn-primary"/>
                      </div>
                  </form>
                  </div>  */}
          </div>
        </div>
      </div>
    );
  }
}
