import React, { Component } from 'react';
import '../css/Profile.css';
import Chart from './Chart';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={profile:[], graphData:[]};
  }
  componentDidMount(){
  //  this.callApiGraph().then(data => (this.setState({graphData:data})));
    //this.callApiProfile().then(data => (this.setState({profile:data})));
  }
  //Calls the information from the graph of the profile database
  async callApiGraph() {
    const response = await fetch('http://localhost:5000/working_projects?code=test@admin.se');
    const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
    return body;
  };
  //Calls the information from the person profile database
  async callApiProfile(){
    const response = await fetch('http://localhost:5000/person_info?code=chad@bing.se');
    const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    //Get the current date and therefore the month
    //It will be send trough the Chart.js prop
    const date = new Date();
    const month = date.getMonth();

    //Const is read only so I change it to let
    let data_to_profile=[];

    profileCalculator();
    function sumProfesorHours(){
        let sum=0; //The hours of workload substracting 100 hours
        let newArray=[];
        for (var y = 0; y < data_to_profile.length; y++) { //2 and [x][y]
            sum=0;
            for (let x = 0; x < data_to_profile.length-1; x++) { //3
              sum=sum+data_to_profile[x][y];
            }
            newArray.push(100-sum);
         }
         for (let i = 0; i < data_to_profile.length; i++) { //2
            data_to_profile[(data_to_profile.length-1)].push(newArray[i]);
          }
    }

    let first_name, last_name, email, department,office,isprofessor = "";
    this.state.profile.map(p=>(first_name=p.first_name));
    this.state.profile.map(p=>(last_name=p.last_name));
    this.state.profile.map(p=>(email=p.email));
    this.state.profile.map(p=>(department=p.department));
    this.state.profile.map(p=>(office=p.office));
    this.state.profile.map(p=>(isprofessor=p.isprofessor));
    if(isprofessor===1){isprofessor="Professor";}else {isprofessor="Student"}

    let workload="";
    this.state.graphData.map(p=>(workload=p.workload));

    function profileCalculator(){
      let hiring_date = new Date("August, 2018");
      let end_date    = new Date("September, 2018");
      workload    = 10;
      let arrayMonth  = [];
      let elapsedForZero =  Math.round((((((end_date-date)/1000)/60)/60)/24)/30);
      for (let i = 0; i < elapsedForZero-1;i++){
        arrayMonth.push(0);
      }
      let elapsed     = Math.round((((((end_date-hiring_date)/1000)/60)/60)/24)/30);
      let elapsed1    = elapsed;
      for (let i = 0; i < elapsed1; i++) {
          arrayMonth.push(workload);
      }

      hiring_date = new Date("September, 2018");
      elapsedForZero =  Math.round((((((hiring_date-end_date)/1000)/60)/60)/24)/30);
      end_date    = new Date("January, 2019");
      workload    = 13;
      if(elapsed===1){
        for (let i = 0; i < elapsedForZero;i++){
          arrayMonth.push(0);
        }
      }else {
        for (let i = 0; i < elapsedForZero-1;i++){
          arrayMonth.push(0);
        }
      }
      elapsed     = Math.round((((((end_date-hiring_date)/1000)/60)/60)/24)/30);
      elapsed1    = elapsed;
      for (let i = 0; i < elapsed1; i++) {
          arrayMonth.push(workload);
      }
      //for 3
      hiring_date = new Date("January, 2019");
      elapsedForZero =  Math.round((((((hiring_date-end_date)/1000)/60)/60)/24)/30);
      end_date    = new Date("March, 2019");
      workload    = 15;
      if(elapsed===1){
        for (let i = 0; i < elapsedForZero;i++){
          arrayMonth.push(0);
        }
      }else {
        for (let i = 0; i < elapsedForZero-1;i++){
          arrayMonth.push(0);
        }
      }
      elapsed     = Math.round((((((end_date-hiring_date)/1000)/60)/60)/24)/30);
      elapsed1    = elapsed;
      for (let i = 0; i < elapsed1; i++) {
          arrayMonth.push(workload);
      }

      data_to_profile.push(arrayMonth);
      //Add empty array for teaching bar section
      //for 2
      //Add empty array for teaching bar section
      data_to_profile.push([]);
      //Call the 100 hours - workload calculator
      sumProfesorHours();
    }


    return (
      <div>
        <div className="title">
          Profile
        </div>
        <div className="row panel flex-center-vertically">
          <div className="col-3 margin-10">
            <p><span className="bold">Name: </span>{first_name}</p>
            <p><span className="bold">Lastname: </span> {last_name}</p>
            <p><span className="bold">Email: </span>{email}</p>
            <p><span className="bold">Department: </span>{department}</p>
            <p><span className="bold">Office: </span>{office}</p>
            <p><span className="bold">Role: </span>{isprofessor}</p>
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
