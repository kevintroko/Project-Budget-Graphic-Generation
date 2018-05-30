import React, { Component } from 'react';
import '../css/Profile.css';
import Chart from './Chart';

class Profile extends Component {
  render() {
    //Get the current date and therefore the month
    //It will be send trough the Chart.js prop
    const date = new Date();
    const month = date.getMonth();
    //Const is read only so I change it to let
    let sum_data=100;
    let data_to_profile = [20,20,20,10];
    profileCalculator();

    function profileCalculator() {
      for (var i = 0; i < data_to_profile.length; i++) {
        sum_data-=data_to_profile[i];
      } if (sum_data<100){
        data_to_profile = [20,20,20,10, sum_data];
      }
    }

    // personMonthCalculator();
    //
    // function personMonthCalculator() {
    //   for (var i = 0; i < data_to_send.length; i++) {
    //     data_to_send[i]=data_to_send[i]*0.1;
    //   }
    // }

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
            <p><span className="bold">Role: </span>{this.props.rolee}</p>
            <div className="button panel bold shadow hvr-grow"  data-toggle="modal" data-target="#myModal">add to project</div>
          </div>
          <div className="col-9">
            <Chart data={data_to_profile} type="profile" startDate={month}/>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
