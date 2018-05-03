import React, { Component } from 'react';
import '../css/List.css';

class List extends Component {
  render() {
    return (
      <div>
        <span><i className="material-icons circle-icon shadow">edit</i></span>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title">
                  <span id=active>People</span> <a href="list_project_admin.php" id=inactive>Project</a>
                </div>
              </div>
            </div>
            <div className="row">
              <table className="table">
                <thead>
                  <tr className="table-row">
                    <th scope="col">Name <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
                    <th scope="col">Lastname <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
                    <th scope="col">Email <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
                    <th scope="col">Role <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
                    <th scope="col">Projects <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
                    <th scope="col">Workflow <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
              			<th scope="col">Salary <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
              			<th scope="col">OH<i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></th>
              			<th scope="col"><i className="material-icons vertical-align-middle padding-bottom-3 hidden">delete</i></th>
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
