import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Project} from './Project';

class ProjectContainer extends Component {
	constructor(props) {
		super(props);
		this.state={
			project: null,
			members: [],
		};
	}

	componentWillMount(){
    this.fetchProjectDetails().then(data => {
			this.setState({project: data[0]});
		});
		this.fetchMembers().then(membersQuery => {
			this.setState({members: this.improveNames(membersQuery)});
		});
	}

	improveNames(members){
		let newMembers=[];
		for(var i=0; i<members.length; i++){
			let name = members[i].first_name;
			if(members[i].middle_name != null){
				name += " "+members[i].middle_name;
			}
			name += " "+members[i].last_name;

			newMembers.push({name: name, workload: members[i].workload, hiring_date: members[i].hiring_date, deadline: members[i].deadline});
		}
		return newMembers;
	};



	async fetchMembers() {
    const response = await fetch('http://localhost:5000/members?code='+this.props.location.query.code);
    const body = await response.json();
  	if (response.status !== 200) throw Error(body.message);

    return body;
  };


	async fetchProjectDetails(){
    const response = await fetch('http://localhost:5000/projectDetails?code='+this.props.location.query.code);
    const body = await response.json();
  	if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
		//makes sure the SQL query finished
		if(this.state.project){
    	return <Project project={this.state.project} members={this.state.members} />;
		}else{
			return null;
		}
  }

};
export default ProjectContainer;

ProjectContainer.defaultProps = {
	name: 'Project name',
	owner: 'Owner',
	code:	"ASS34",
	current_balance: 0,
	budget: 0,
	description: ''
};
