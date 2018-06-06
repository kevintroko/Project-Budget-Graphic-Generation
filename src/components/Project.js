import React from 'react';
import Chart from './Chart';
import {Table} from './Table';
import {Row,Col,Container} from 'reactstrap';
// import '../css/Profile.css';
//
// class Project extends Component {
//   render() {
// 		//DUMMY DATA
// 		const date = new Date();
// 		const month = date.getMonth();
// 		var project = {name:"Volvo Project",startDate:"",deadline:""};
// 		project.startDate=new Date("March, 2018");
// 		project.deadline=new Date("December, 2018");
// 		let time = Math.round((((((project.deadline-project.startDate)/1000)/60)/60)/24)/30);
// 		console.log(time);
// 		let budget = 2000;
// 		let cost=0;
// 		let budgetData = [];
// 		var person1 = {firstName:"John",lastName:"Doe",salary:50,socialfactor:1,cost:0};
// 		var person2 = {firstName:"James",lastName:"Blunt",salary:50,socialfactor:1,cost:0};
// 		var person3 = {firstName:"Peter",lastName:"Parker",salary:50,socialfactor:1,cost:0};
// 		getCost();
//
// 		function getCost(){
// 			person1.cost=(person1.salary)*(person1.socialfactor);
// 			person2.cost=person2.salary*person2.socialfactor;
// 			person3.cost=person3.salary*person3.socialfactor;
// 			cost=person1.cost+person2.cost+person3.cost;
// 			for (var i = 0; i < time; i++) {
// 				budgetData.push(budget);
// 				budget=budget-cost;
// 			}
// 		}
//
//     return (
//       <div>
//         {/* <div className="title">
//           Project
//         </div> */}
//         <div className="row panel flex-center-vertically">
//           <div className="col-9">
// 						<Chart data={budgetData} type="budget" startDate={project.startDate.getMonth()} endDate={project.deadline.getMonth()}/>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };
// export default Project;



export const Project = (props) => {
	console.log(props);
	return(
    <Container>
    <Row>
		<Col xs="6">
				<Card
					name={props.project.name}
					content=
						{<ProjectDescription
							owner={props.project.owner}
							current_balance={props.project.current_balance}
							budget={props.project.budget}
							startDate={props.project.start_date}
							deadline={props.project.deadline}
							description={props.project.description}
						/>}
				/>

				<Card
					name='Members'
					content=
						{<Table
							cols={['Name','Email','Workflow','Start Date','End Date']}
							data={props.members}
							links={props.memberLinks}
						/>}
				/>

			</Col>
			<Col xs="6">
				<Card
					name='Graph'
					content=''
				/>
			</Col>
    </Row>
    </Container>
	);
}

function ProjectDescription (props){
	return(
		<table className="table table-sm">
		  <thead></thead>
		  <tbody>
			<tr>
			  <th scope="row">Owner</th>
			  <td>{props.owner}</td>
			</tr>
			<tr>
			  <th scope="row">Budget</th>
			  <td>{props.budget}</td>
			</tr>
			<tr>
			  <th scope="row">Start date</th>
			  <td>{props.startDate}</td>
			</tr>
			<tr>
			  <th scope="row">Deadline</th>
			  <td>{props.deadline}</td>
			</tr>
			<tr>
			  <th scope="row">Description</th>
			  <td>{props.description}</td>
			</tr>
		  </tbody>
		</table>
	);
}

function Card (props){
	return (
		<div className="row">
			<h1>
				{props.name}
			</h1>
			{props.content}
		</div>
	);
}

// function getCost(){
//   person1.cost=(person1.salary)*(person1.socialfactor);
//   person2.cost=person2.salary*person2.socialfactor;
//   person3.cost=person3.salary*person3.socialfactor;
//   cost=person1.cost+person2.cost+person3.cost;
//   for (var i = 0; i < time; i++) {
//     budgetData.push(budget);
//     budget=budget-cost;
//   }
// }
