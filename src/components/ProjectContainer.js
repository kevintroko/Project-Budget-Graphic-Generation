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
		// var data = 'dsjlfjsdlf';
		// fetch('/users?code='+data).then(function(response){
		// 	return response.json()
		// }).then(function(body){
		// 	console.log(body);
		// });
		this.setState({ isLoading: true });
    this.fetchProjects().then(data => {
			this.fetchMembers().then(membersQuery => {
				this.setState({isLoading:false, project: data[0], members: membersQuery});
			});
		});
	}

	fetchProjects = async() => {
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
