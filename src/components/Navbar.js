import React, { Component } from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
       <div>
         <nav className="navbar navbar-expand-lg navbar-light bottom-border">
         	<a className="navbar-brand orange" href="#index">Project Budget Manager</a>
         	<div className="navbar-nav w-100">

         		<a className="nav-item nav-link ml-auto" href="#Profile">Name Lastname</a>
         		<a className="nav-item nav-link" href="#Notifications"
         			data-toggle="popover"
         			data-placement="bottom"
         			data-html="true" >
         				Notifications
         		</a>
         		<a className="nav-item nav-link" href="#List">Database</a>
         		<a className="nav-item nav-link" href="#Index">Log out</a>
         	</div>
         </nav>
      </div>
    )
  }
};

export default Navbar;
