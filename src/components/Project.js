import React, { Component } from 'react';
import Chart from './Chart';
import '../css/Profile.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state={project:{percentage:0,start_date:new Date(),deadline:new Date(),budget:0}, persons:[]};
  }

  componentWillMount(){
   this.callApi().then(data => (this.getData(data)));
  }

  getData(data){
    let pr=Object.assign({}, this.state.project);
    let pers={salary:0,socialfactor:0,workload:0,firstDay:new Date(),LastDay:new Date()};

    data.map(p=> (
      pr.budget=p.budget,
      pr.start_date=new Date(p.start_date),
      pr.deadline=new Date(p.deadline),
      pr.percentage=p.expectedPercentage,
      pers.salary=p.salary,
      pers.socialfactor=p.socialfactor,
      pers.workload=p.workload,
      pers.firstDay=new Date(p.hiring_date),
      pers.LastDay=new Date(p.end_date)
    ))
    this.setState(prevState => ({ persons: [...prevState.persons, pers]}))
    console.log(this.state.values);
    console.log(data);
    console.log(pr);
  }

  async callApi(){
    const response = await fetch('http://localhost:5000/project_info?code='+'ASS34');
    const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    let dates, datesP;
		let time = Math.round((((((this.state.project.deadline-this.state.project.startDate)/1000)/60)/60)/24)/30);
		let cost=0;
		let budgetData = [];
		let averageLine = [];
		let expected_budget = this.state.project.budget*((100-this.state.project.percentage)*0.01);
    //Push the project budget into the graph so push 2000
    budgetData.push(this.state.project.budget);
    averageLine.push(expected_budget);
    this.state.persons.map(pers=>(pers.cost=(pers.salary)*(pers.socialfactor)*(pers.workload/100)));
    let peopleToADD;
    let currentmonth,currentmonthPerson;
    //GET array of months )
    getBudgetPerMonth(this.state.project.start_date.getFullYear()+" "+(this.state.project.start_date.getMonth()),(this.state.project.deadline.getFullYear())+" "+(this.state.project.deadline.getMonth()));
    this.state.persons.map(pers=>(
    getPersonPerMonth((pers.firstDay.getFullYear())+" "+(pers.firstDay.getMonth()),(pers.LastDay.getFullYear())+" "+(pers.LastDay.getMonth()),pers)
    ))

    for (let x = 0; x < 12; x++) {
      //BEGIN
      peopleToADD = [];
      currentmonth = dates.shift();
                  this.state.persons.map(pers=>{
                    if(pers.monthsWorking[0]===currentmonth){
                      currentmonthPerson = pers.monthsWorking.shift();
                      if(currentmonth===currentmonthPerson){
                        peopleToADD.push(pers);
                      }
                    }
                  }
      )


      for (var i = 0; i < peopleToADD.length; i++) {
        cost+=peopleToADD[i].cost;
      }
      //Push the 80% of line
      averageLine.push(expected_budget);
      this.state.project.budget=this.state.project.budget-cost;
      budgetData.push(this.state.project.budget);
      cost=0;
      //END
    }

    function getPersonPerMonth(startDate,endDate,personN){
        let start      = startDate.split(' ');
        let end        = endDate.split(' ');
        let startYear  = parseInt(start[0]);
        let endYear    = parseInt(end[0]);
        personN.monthsWorking  = [];
        var datesPeople= [];
        for(var i = startYear; i <= endYear; i++) {
          var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
          var startMon = i === startYear ? parseInt(start[1])-1 : 0;
          for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
            var month = j+1;
            var displayMonth = month < 10 ? month : month;
            personN.monthsWorking.push([i, displayMonth].join(' '));
          }
        }
    }

    function getBudgetPerMonth(startDate,endDate){
        let start      = startDate.split(' ');
        let end        = endDate.split(' ');
        let startYear  = parseInt(start[0]);
        let endYear    = parseInt(end[0]);
        dates      = [];
        var datesPeople= [];
        for(var i = startYear; i <= endYear; i++) {
          var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
          var startMon = i === startYear ? parseInt(start[1])-1 : 0;
          for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
            var month = j+1;
            var displayMonth = month < 10 ? month : month;
            dates.push([i, displayMonth].join(' '));
          }
        }
    }

    return (
      <div>
        <div className="title">Project</div>
        <div className="row panel flex-center-vertically">
          <div className="col-12">
						<Chart data={budgetData} averageLine={averageLine} type="budget"
							startDate={this.state.project.start_date}
							endDate={this.state.project.deadline}/>
          </div>
        </div>
      </div>
    );
  }
};
export default Project;

// import {Table} from './Table';

// function ProjectDescription (props){
// 	return(
// 		<table className="table table-sm">
// 		  <thead></thead>
// 		  <tbody>
// 			<tr>
// 			  <th scope="row">Owner</th>
// 			  <td>{props.owner}</td>
// 			</tr>
// 			<tr>
// 			  <th scope="row">Budget</th>
// 			  <td>{props.current_balance} / {props.budget}</td>
// 			</tr>
// 			<tr>
// 			  <th scope="row">Start date</th>
// 			  <td>{props.startDate}</td>
// 			</tr>
// 			<tr>
// 			  <th scope="row">Deadline</th>
// 			  <td>{props.endDate}</td>
// 			</tr>
// 			<tr>
// 			  <th scope="row">Description</th>
// 			  <td>{props.description}</td>
// 			</tr>
// 		  </tbody>
// 		</table>
// 	);
// }

// function Card (props){
// 	return (
// 		<div className="row">
// 			<h1>
// 				{props.name}
// 			</h1>
// 			{props.content}
// 		</div>
// 	);
// }

// export const Project = (props) => {
// 	return(
// 		<div className="container">
// 		<div className="row">
// 			<div className="col-sm-6">
// 				<Card
// 					name={props.project.name}
// 					content=
// 						{<ProjectDescription
// 							owner={props.project.owner}
// 							current_balance={props.project.current_balance}
// 							budget={props.project.budget}
// 							startDate={props.project.start_date}
// 							endDate={props.project.end_date}
// 							description={props.project.description}
// 						/>}
// 				/>
//
// 				<Card
// 					name='Members'
// 					content=
// 						{<Table
// 							cols={['Name','Workflow','Start Date','End Date']}
// 							data={props.members}
// 						/>}
// 				/>
//
// 			</div>
// 			<div className="col-sm-6">
// 				<Card
// 					name='Graph'
// 					content=''
// 				/>
// 			</div>
// 		</div>
// 	</div>
// 	);
// }
