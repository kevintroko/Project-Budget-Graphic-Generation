import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
       <div>
         <nav className="navbar navbar-light bottom-border">
           <div className="navbar-nav w-100">
             <a className="navbar-brand" id="left-align" href="home.php">Project Budget Manager</a>
             <a className="nav-item nav-link ml-auto" href="profile.php">Name Lastname</a>
             <a className="nav-item nav-link" href="index.html"
               data-toggle="popover"
               data-placement="bottom"
               data-html="true" >
               Notifications
             </a>
             <a className="nav-item nav-link" href="list_people.php">Database</a>
             <a className="nav-item nav-link" href="index.php">Log out</a>
           </div>
         </nav>
      </div>
    )
  }
};

export default Navbar;
