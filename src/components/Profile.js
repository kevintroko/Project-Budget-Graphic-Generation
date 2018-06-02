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
    //let sum_data=100;
    let data_to_profile;
    profileCalculator();

    function profileCalculator(){
       data_to_profile = [[10,11,12,50,100,0],[20,21,22,50,0,0]];
       //Add empty array for teaching bar section
       data_to_profile.push([]);
       //Call the 100 hours - workload calculator
       sumProfesorHours();
    }

    function sumProfesorHours(){
        let sum; //The hours of workload substracting 100 hours
        let newArray=[];
        for (var y = 0; y < data_to_profile[0].length; y++) {
          sum=0;
          for (let x = 0; x < data_to_profile.length-1; x++) {
            sum=sum+data_to_profile[x][y];
          }
          newArray.push(100-sum);
        }
        for (var i = 0; i < data_to_profile[0].length; i++) {
          data_to_profile[2].push(newArray[i]);
        }
    }

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
