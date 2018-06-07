import React from 'react';
import Chart from './Chart';
import {Table} from './Table';
import {Row,Col,Container} from 'reactstrap';

import AddIcon from './AddIcon';


export const Project = (props) => {
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
			<AddIcon icon="edit" link={{pathname:"/editproject",
				 													state: {
																		name: props.project.code,
																	}
																}}/>
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
