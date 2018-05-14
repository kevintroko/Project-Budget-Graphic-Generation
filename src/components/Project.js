import React from 'react';
import {Table} from './Table';

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
			  <td>{props.current_balance} / {props.budget}</td>
			</tr>
			<tr>
			  <th scope="row">Start date</th>
			  <td>{props.startDate}</td>
			</tr>
			<tr>
			  <th scope="row">Deadline</th>
			  <td>{props.endDate}</td>
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

export const Project = (props) => {
	console.log(props);
	return(
		<div className="container">
		<div className="row">
			<div className="col-sm-6">
				<Card
					name={props.project.name}
					content=
						{<ProjectDescription
							owner={props.project.owner}
							current_balance={props.project.current_balance}
							budget={props.project.budget}
							startDate={props.project.start_date}
							endDate={props.project.end_date}
							description={props.project.description}
						/>}
				/>

				<Card
					name='Members'
					content=
						{<Table
							cols={['Name','Workflow','Start Date','End Date']}
							data={[
								['John Bergstrom','60%','26/4/2018','27/4/2018'],
								['John Bergstrom','60%','26/4/2018','27/4/2018'],
								['John Bergstrom','60%','26/4/2018','27/4/2018']
								]}
						/>}
				/>

			</div>
			<div className="col-sm-6">
				<Card
					name='Graph'
					content=''
				/>
			</div>
		</div>
	</div>
	);
}
