import React, { Component } from 'react';
import '../css/List.css';

function ColumnHeader(name){
	return (<th scope="col">{name}<i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>);
}

function ColumnRow(data){
	let row = [];
	if(data){
		for(var i=0; i<data.length; i++){
			row.push(RowData(data[i]));
		}
	}
	return (<tr>
				{row}
				<td><i className="material-icons vertical-align-middle padding-bottom-3">delete</i></td>
			</tr>);
}

function RowData(data){
	return (<td>{data}</td>);
}

class List extends Component {
	
	constructor(props){
		super(props);
	}
	
	render() {
		//column headers
		let cols = [];
		for (var i=0; i < this.props.cols.length; i++){
			cols.push(ColumnHeader(this.props.cols[i]));
		}
		//fill data
		let rows = [];
		
		for(var i=0; i < this.props.data.length; i++){
			rows.push(ColumnRow(this.props.data[i]));
		}
		  
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
				  <table className="table">
					<thead>
					
					
					  <tr className="table-row">
					  {cols}
					  </tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				  </table>
				</div>
			  </div>
		  </div>
		);
  }
};

export default List;
