import React, { Component } from 'react';
import Chart from './Chart';
import '../css/Profile.css';

class Project extends Component {
  render() {
		//DUMMY DATA
		var project = {name:"Volvo Project",startDate:new Date("March, 2018"),deadline:new Date("February, 2019"),percentage:80.0, budget:2000};
		let time = Math.round((((((project.deadline-project.startDate)/1000)/60)/60)/24)/30);
		let cost=0;
		let budgetData = [];
		let averageLine = [];
		var person1 = {firstName:"John",lastName:"Doe",salary:50,socialfactor:1.4,cost:0,workload:10};
		var person2 = {firstName:"James",lastName:"Blunt",salary:50,socialfactor:1.4,cost:0,workload:100};
		var person3 = {firstName:"Peter",lastName:"Parker",salary:50,socialfactor:1.4,cost:0,workload:50};
		let expected_budget = project.budget*((100-project.percentage)*0.01);
		getCost();
		function getCost(){
			person1.cost=(person1.salary)*(person1.socialfactor);
			person2.cost=person2.salary*person2.socialfactor;
			person3.cost=person3.salary*person3.socialfactor;
			cost=person1.cost+person2.cost+person3.cost;
			for(var i=0; i<time+2;i++) {
				budgetData.push(project.budget);
				averageLine.push(expected_budget);
				project.budget=project.budget-cost;
			}//display extra month
		}
    return (
      <div>
        <div className="title">Project</div>
        <div className="row panel flex-center-vertically">
          <div className="col-12">
						<Chart data={budgetData} averageLine={averageLine} type="budget"
							startDate={project.startDate}
							endDate={project.deadline}/>
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
