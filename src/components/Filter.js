import React, { Component } from 'react';
import '../css/Home.css';

class Filter extends Component {
	render() {
		return (
        <div className="row filter shadow d-flex justify-content-around p-2">
          <div className="p-2 filter-text">Owner <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
          <div className="p-2 filter-text">Project name	 <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
          <div className="p-2 filter-text">Budget percentage  <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
          <div className="p-2 filter-text">Budget left  <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
        </div>
      );
    }
};

export default Filter;
