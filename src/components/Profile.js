import React, { Component } from 'react';
import '../css/Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <div class="row panel">
          <div class="col-3 bold">
            <p>Name: </p>
            <p>Lastname:</p>
            <p>Email:</p>
            <p>Role:</p>
          </div>
          <div class="col">
            <p>{this.props.name}</p>
            <p>{this.props.lastname}</p>
            <p>{this.props.email}</p>
            <p>{this.props.role}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
