import React, { Component } from 'react';
import '../css/Profile.css';
import Chart from './Chart';
// var date1 = new Date('December 17, 1995 03:24:00');
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={profile:[], graphData:[]};
  }

  componentDidMount(){
    this.callApiGraph().then(data => (this.setState({graphData:data})));
    this.callApiProfile().then(data => (this.setState({profile:data})));
  }

  async callApiGraph() {
    const response = await fetch('http://localhost:5000/working_projects?code=test@admin.se');
    const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
    return body;
  };

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

    let first_name, last_name, email, department,office,isprofessor = "";
    this.state.profile.map(p=>(first_name=p.first_name));
    this.state.profile.map(p=>(last_name=p.last_name));
    this.state.profile.map(p=>(email=p.email));
    this.state.profile.map(p=>(department=p.department));
    this.state.profile.map(p=>(office=p.office));
    this.state.profile.map(p=>(isprofessor=p.isprofessor));
    if(isprofessor===1){isprofessor="Professor";}else {isprofessor="Student"}

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
            <Chart data={['10','20','30','40']} type="budget" startDate={month}/>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
