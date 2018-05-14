import React, { Component } from 'react';
import '../css/Home.css';
const icon="arrow_drop_down";
const icon_up="arrow_drop_up";

class Filter extends Component {
  constructor(props) {
  super(props);
  this.state = {isToggleOn: false, isToggleOn2: false, isToggleOn3: false,  isToggleOn4: false};
  this.handleClickOwner = this.handleClickOwner.bind(this);
  this.handleClickName= this.handleClickName.bind(this);
  this.handleClickBudget = this.handleClickBudget.bind(this);
  this.handleClickLeft = this.handleClickLeft.bind(this);
}

handleClickOwner() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    this.state.isToggleOn2=this.state.isToggleOn3=this.state.isToggleOn4=false;
  }

handleClickName() {
      this.setState(prevState => ({
        isToggleOn2: !prevState.isToggleOn2
      }));
    this.state.isToggleOn=this.state.isToggleOn3=this.state.isToggleOn4=false;
}

handleClickBudget() {
    this.setState(prevState => ({
      isToggleOn3: !prevState.isToggleOn3
    }));
    this.state.isToggleOn2=this.state.isToggleOn=this.state.isToggleOn4=false;
  }

handleClickLeft() {
      this.setState(prevState => ({
        isToggleOn4: !prevState.isToggleOn4
      }));
      this.state.isToggleOn2=this.state.isToggleOn3=this.state.isToggleOn=false;
}

  render() {
    return (
        <div className="row filter shadow d-flex justify-content-around p-2">
          <div onClick={this.handleClickOwner}>{this.state.isToggleOn ? <div className="p-2 filter-text">Owner <i className="material-icons vertical-align-middle padding-bottom-3">{icon_up}</i></div>:
           <div className="p-2 filter-text">Owner <i className="material-icons vertical-align-middle padding-bottom-3">{icon}</i></div>}</div>
          <div onClick={this.handleClickName}>{this.state.isToggleOn2 ? <div className="p-2 filter-text">Project Name <i className="material-icons vertical-align-middle padding-bottom-3">{icon_up}</i></div>:
          <div className="p-2 filter-text">Project Name <i className="material-icons vertical-align-middle padding-bottom-3">{icon}</i></div>}</div>
          <div onClick={this.handleClickBudget}>{this.state.isToggleOn3 ? <div className="p-2 filter-text">Budget percentage <i className="material-icons vertical-align-middle padding-bottom-3">{icon_up}</i></div>:
          <div className="p-2 filter-text">Budget percentage <i className="material-icons vertical-align-middle padding-bottom-3">{icon}</i></div>}</div>
          <div onClick={this.handleClickLeft}>{this.state.isToggleOn4 ? <div className="p-2 filter-text">Budget left <i className="material-icons vertical-align-middle padding-bottom-3">{icon_up}</i></div>:
          <div className="p-2 filter-text">Budget left <i className="material-icons vertical-align-middle padding-bottom-3">{icon}</i></div>}</div>
          {/* /test */}
        </div>
      );
    }
};

export default Filter;
