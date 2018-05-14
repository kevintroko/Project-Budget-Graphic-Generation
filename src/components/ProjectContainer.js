import React from 'react';
import PropTypes from 'prop-types';
import '../css/Project.css';
import {Project} from './Project';

export class ProjectContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			project: null,
      isLoading: false,
      response:'',
		};
	}

	componentWillMount(){
		//SQL query
		this.setState({ isLoading: true });
    this.callApi().then(data => {
			this.setState({isLoading:false});

			//find the correct project
			for(var i=0; i < data.length; i++){
				if(data[i].code == this.props.code){
					this.setState({project: data[i]});
					break;
				}
			}
		});
	}

	callApi = async() => {
    const response = await fetch('/projects');
    const body = await response.json();
  	if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
		//makes sure the SQL query finished
		if(this.state.project){
    	return <Project project={this.state.project} />;
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
