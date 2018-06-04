import React, { Component } from 'react';
import '../css/Profile.css';

class CreateProjectPage extends Component {
  render() {

    //Get the current date and therefore the month
    //It will be send trough the Chart.js prop
    var date = new Date();
    var month = date.getMonth();


    return (

      <div>
        <div className="createProjectPage">
          Profile
        </div>
        <div className="row panel flex-center-vertically">
          <div className="col-3 margin-10">
            <p><span className="bold">Name: </span>{this.props.name}</p>
            <p><span className="bold">Lastname: </span> {this.props.lastname}</p>
            <p><span className="bold">Email: </span>{this.props.email}</p>
            <p><span className="bold">Role: </span>{this.props.rolee}</p>
            <div className="button panel bold shadow hvr-grow"  data-toggle="modal" data-target="#myModal">add to project</div>
          </div>
          <div className="col-9">

          </div>
        </div>
      </div>
    );
  }
};

export default CreateProjectPage;
