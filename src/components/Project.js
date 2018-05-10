import React, { Component } from 'react';
import '../css/Project.css';
import Table from './Table';

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
				{props.title}
			</h1>
			{props.content}
		</div>
	);
}

class Project extends Component {
  render() {
    return (
       <div className="container">
			<div className="row">

				<div className="col-sm-6">
					<Card
						title='Project title'
						content=
							{<ProjectDescription
								owner='Sergei Bogdevic'
								budget='1 000 zimbabwe dollars'
								startDate='24/4/2017'
								endDate='24/4/2089'
								description='Very good description'
							/>}
					/>

					<Card
						title='Members'
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
						title='Graph'
						content=''
					/>
				</div>
			</div>
		</div>
    )
  }
};

export default Project;
