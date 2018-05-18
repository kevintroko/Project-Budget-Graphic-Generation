import React from 'react';
import PropTypes from 'prop-types';
import '../css/Project.css';
import {Project} from './Project';

export class ProjectContainer extends React.Component {
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
	}

	fetchProjectDetails = async() => {
    const response = await fetch('/projectDetails?code='+this.props.code);
    const body = await response.json();
  	if (response.status !== 200) throw Error(body.message);

    return body;
  };

	fetchMembers = async() => {
    const response = await fetch('/members?code='+this.props.code);
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

ProjectContainer.defaultProps = {
	name: 'Project name',
	owner: 'Owner',
	code:	"ASS34",
	current_balance: 0,
	budget: 0,
	description: ''
};
ProjectContainer.propTypes={
	name: 						PropTypes.string.isRequired,
	owner: 						PropTypes.string.isRequired,
	code:							PropTypes.string.isRequired,
	current_balance: 	PropTypes.number.isRequired,
	budget:						PropTypes.number.isRequired,
	description: 			PropTypes.string,
};
