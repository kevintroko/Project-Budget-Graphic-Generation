import React, { Component } from 'react';
import '../css/Profile.css';
import Chart from './Chart';

class Profile extends Component {
  render() {
    console.log("HEj hej");
    return (

      <div>
        <div className="title">
          Profile
        </div>
        <div className="row panel flex-center-vertically">
          <div className="col-3 margin-10">
            <p><span className="bold">Name: </span>{this.props.name}</p>
            <p><span className="bold">Lastname: </span> {this.props.lastname}</p>
            <p><span className="bold">Email: </span>{this.props.email}</p>
            <p><span className="bold">Role: </span>{this.props.role}</p>
            <div className="button panel bold shadow hvr-grow"  data-toggle="modal" data-target="#myModal">add to project</div>
          </div>
          <div className="col-9">
            <Chart data={['10','20','20','30','30','20']} type="profile"/>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;