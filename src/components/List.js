import React, { Component } from 'react';
import '../css/List.css';
import Table from './Table';



class List extends Component {
	
	constructor(props){
		super(props);
	}
	
	render() {
		  
		return (
		  <div>
			<span><i className="material-icons circle-icon shadow">edit</i></span>
			  <div className="container">
				<div className="row">
				  <div className="col">
					<div className="title">
					  <span id="active">People</span> <a href="list_project_admin.php" id="inactive">Project</a>
					</div>
				  </div>
				</div>
				<div className="row">
				  <Table cols={this.props.cols}
						data={this.props.data}/>
				</div>
			  </div>
		  </div>
		);
  }
};

export default List;
