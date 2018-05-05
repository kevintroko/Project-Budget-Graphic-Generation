import React, { Component } from 'react';
import '../css/Navbar.css';
import Notifications from './Notifications';
import {Popover, Button, PopoverBody} from 'reactstrap';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );
    return (
       <div>
         <nav className="navbar navbar-expand-lg navbar-light bottom-border">
         	<a className="navbar-brand orange" href="#index">Project Budget Manager</a>
         	<div className="navbar-nav w-100">
         		<a className="nav-item nav-link ml-auto" href="#Profile">Name Lastname</a>
            <a className="nav-item nav-link" onClick={this.toggle} id="Notifications" href="#">Notifications</a>
            {/* Notifications popup*/}
            <Popover
                  className="shadow"
                  placement="bottom"
                  isOpen={this.state.popoverOpen}
                  target="Notifications"
                  toggle={this.toggle}>
              <PopoverBody>
                <Notifications/>
              </PopoverBody>
            </Popover>

         		<a className="nav-item nav-link" href="#List">Database</a>
         		<a className="nav-item nav-link" href="#Index">Log out</a>
         	</div>
         </nav>
      </div>
    )
  }
};

export default Navbar;
