import React, { Component } from 'react';
import Chart from './Chart';
import '../css/Profile.css';

class Project extends Component {
  render() {
		//DUMMY DATA
    let dates, datesP;
		var project = {name:"Volvo Project",startDate:new Date("March, 2018"),deadline:new Date("February, 2019"),percentage:80.0, budget:2000};
		let time = Math.round((((((project.deadline-project.startDate)/1000)/60)/60)/24)/30);
		let cost=0;
		let budgetData = [];
		let averageLine = [];
		var person1 = {firstName:"John",lastName:"Doe",salary:100,socialfactor:1.4,cost:0,workload:10,firstDay:new Date("March, 2018"),LastDay:new Date("February, 2019"), monthsWorking:[]};
		var person2 = {firstName:"James",lastName:"Blunt",salary:100,socialfactor:1.4,cost:0,workload:10,firstDay:new Date("April, 2018"),LastDay:new Date("August, 2018"), monthsWorking:[]};
		var person3 = {firstName:"Peter",lastName:"Parker",salary:200,socialfactor:1.4,cost:0,workload:50,firstDay:new Date("April, 2018"),LastDay:new Date("June, 2018"), monthsWorking:[]};
    var person4 = {firstName:"Peter",lastName:"Parker",salary:100,socialfactor:1.4,cost:0,workload:100,firstDay:new Date("September, 2018"),LastDay:new Date("February, 2019"), monthsWorking:[]};
		let expected_budget = project.budget*((100-project.percentage)*0.01);
    //Push the project budget into the graph so push 2000
    budgetData.push(project.budget);
    averageLine.push(expected_budget);
		getCost();
    let peopleToADD;
    let currentmonth,currentmonthPerson;
    //GET array of months
    getBudgetPerMonth((project.startDate.getFullYear())+" "+(project.startDate.getMonth()),(project.deadline.getFullYear())+" "+(project.deadline.getMonth()));
    getPersonPerMonth((person1.firstDay.getFullYear())+" "+(person1.firstDay.getMonth()),(person1.LastDay.getFullYear())+" "+(person1.LastDay.getMonth()),person1);
    getPersonPerMonth((person2.firstDay.getFullYear())+" "+(person2.firstDay.getMonth()),(person2.LastDay.getFullYear())+" "+(person2.LastDay.getMonth()),person2);

    peopleToADD = [];
    currentmonth = dates.shift();
              //Make a person array
                if(person1.monthsWorking[0]===currentmonth){
                  currentmonthPerson = person1.monthsWorking.shift();
                  console.log("currentmonthPerson: "+currentmonthPerson);
                  if(currentmonth===currentmonthPerson){
                    peopleToADD.push(person1);
                  }
                }

                if(person2.monthsWorking[0]===currentmonth){
                  currentmonthPerson = person2.monthsWorking.shift();
                  if(currentmonth===currentmonthPerson){
                    peopleToADD.push(person2);
                  }
                }
    for (var i = 0; i < peopleToADD.length; i++) {
      cost+=peopleToADD[i].cost;
    }
    //Push the 80% of line
    averageLine.push(expected_budget);
    project.budget=project.budget-cost;
    budgetData.push(project.budget);
    cost=0;

    peopleToADD = [];
    currentmonth = dates.shift();
              //Make a person array
                if(person1.monthsWorking[0]===currentmonth){
                  currentmonthPerson = person1.monthsWorking.shift();
                  console.log("currentmonthPerson: "+currentmonthPerson);
                  if(currentmonth===currentmonthPerson){
                    peopleToADD.push(person1);
                  }
                }

                if(person2.monthsWorking[0]===currentmonth){
                  currentmonthPerson = person2.monthsWorking.shift();
                  if(currentmonth===currentmonthPerson){
                    peopleToADD.push(person2);
                  }
                }
    for (var i = 0; i < peopleToADD.length; i++) {
      cost+=peopleToADD[i].cost;
    }
    //Push the 80% of line
    averageLine.push(expected_budget);
    project.budget=project.budget-cost;
    budgetData.push(project.budget);
    cost=0;

    function getCost(){
			person1.cost=(person1.salary)*(person1.socialfactor)*(person1.workload/100);
      person2.cost=(person2.salary)*(person2.socialfactor)*(person2.workload/100);
      person3.cost=(person3.salary)*(person3.socialfactor)*(person3.workload/100);
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
