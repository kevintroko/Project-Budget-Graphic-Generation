import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/List.css';

function ColumnHeader(name){
	return (<th scope="col">{name}<i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>);
}

function Row(data, link){

	let arrData = Object.values(data);
	let rows = [];
	if(data){
		for(var i=0; i<arrData.length; i++){
			let row;
			if(i == 0){
				row = (
					<Link to={link}>
						<td> {arrData[i]} </td>
					</Link>
				);
			}else{
				row = <td> {arrData[i]} </td>;
			}

			rows.push(row);
		}
	}
	return (
			<tr>
				{rows}
				<td><i className="material-icons vertical-align-middle padding-bottom-3">delete</i></td>
			</tr>
	);
}

export class Table extends Component{
	// constructor(props){
	// 	super(props);
	// }
	render(){
		//column headers
		let cols = [];
		if(this.props.cols){
			for (var i=0; i < this.props.cols.length; i++){
				cols.push(ColumnHeader(this.props.cols[i]));
			}
		}
		//fill data
		let rows = [];
		if(this.props.data){
			for(var j=0; j < this.props.data.length; j++){
				let link = (this.props.links) ? this.props.links[j] : "#";
				rows.push(Row(this.props.data[j], link));
			}
		}

		return(
			<table className="table">
				<thead>
					<tr className="table-row">
						{cols}
							{ColumnHeader()}
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}
