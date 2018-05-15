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
      isLoading: false,
      response:'',
		};
	}

	componentWillMount(){
		//SQL query
		this.setState({ isLoading: true });
    this.fetchProjects().then(data => {
			this.fetchMembers().then(membersQuery => {
				this.setState({isLoading:false});
				//find the correct project
				for(var i=0; i < data.length; i++){
					if(data[i].code == this.props.code){
						this.setState({project: data[i]});
						break;
					}
				}
				let mmbrs = [];
				for(var i=0; i<membersQuery.length;i++){
					if(membersQuery[i].project_code == this.state.project.code){
						let mmbr = {name: membersQuery[i].first_name +" "+ membersQuery[i].middle_name +" "+ membersQuery[i].last_name,
												startDate: membersQuery[i].hiring_date,
												endDate: membersQuery[i].deadline,
												workload: membersQuery[i].workload};
						mmbrs.push(mmbr);
					}
				}
				this.setState({members: mmbrs});
			});
		});
	}

	fetchProjects = async() => {
    const response = await fetch('/projects');
    const body = await response.json();
  	if (response.status !== 200) throw Error(body.message);

    return body;
  };

	fetchMembers = async() => {
    const response = await fetch('/members');
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
