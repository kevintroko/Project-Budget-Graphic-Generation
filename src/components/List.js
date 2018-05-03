import React, { Component } from 'react';
import '../css/List.css';

class List extends Component {
	constructor(props){
		super(props);
		
	}
  render() {
	  
	  let cols = [];
	  for (var i=0; i < this.props.cols.length; i++){
		 cols.push(<th scope="col">{this.props.cols[i]}<i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>);
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
                  <tr>
                    <td>John</td>
                    <td>Bergstrom</td>
                    <td>john.bergstrom@mdh.se</td>
                    <td>professor</td>
                    <td>3</td>
                    <td>60%</td>
              			<td>20,000</td>
              			<td>1.4</td>
              			<td><i className="material-icons vertical-align-middle padding-bottom-3">delete</i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    )
  }
};

export default List;
