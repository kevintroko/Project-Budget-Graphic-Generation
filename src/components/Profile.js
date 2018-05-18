import React, { Component } from 'react';
import '../css/Profile.css';
import Chart from './Chart';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="row panel">
          <div className="col-3 bold">
            <p>Name: </p>
            <p>Lastname:</p>
            <p>Email:</p>
            <p>Role:</p>
          </div>
          <div className="col">
            <p>{this.props.name}</p>
            <p>{this.props.lastname}</p>
            <p>{this.props.email}</p>
            <p>{this.props.role}</p>
          </div>
        </div>
        <Chart/>
      </div>
    );
  }
};

export default Profile;
