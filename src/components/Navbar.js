import React, { Component } from 'react';
import '../css/Navbar.css';
import '../css/Notification.css';
import {Popover, PopoverBody} from 'reactstrap';

function Notif(props){
  let timeText;
  let time = props.time;
  if(time > 1440){
    time = Math.round(time/1440);
    timeText="days ago";
  }else if(time > 60){
    time = Math.round(time/60);
    timeText="hours ago";
  }else{
    timeText="mins ago";
  }

  return(
    <div className="notification rounded m-2 p-1">
      <h6>
        {props.text}
      </h6>
      <p className="text-right font-weight-light font-italic m-0">
        {time} {timeText}
      </p>
    </div>
  );
}

class Notifications extends Component {

  render() {
    let result=[];
    let notifs=this.props.notifs;
    if(notifs){
      for(var i=0; i<notifs.length; i++){
        result.push(
          <Notif
            text={notifs[i].text}
            time={notifs[i].time}
          />
        );
        if(i<notifs.length-1){
          result.push(
            <hr className="m-2"/>
          );
        }
      }
    }
    return (
      <div>

        {result}

      	<div className="m-2">
      		<button className="btn  btn-sm btn-block">Mark as read</button>
      	</div>

      </div>
    );
  }
};

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
    // const popoverBottom = (
    //   <Popover id="popover-positioned-bottom" title="Popover bottom">
    //     <strong>Holy guacamole!</strong> Check this info.
    //   </Popover>
    // );
    return (
       <div>
         <nav className="navbar navbar-expand-lg navbar-light bottom-border">
         	<a className="navbar-brand orange" href="#index">Project Budget Manager</a>
         	<div className="navbar-nav w-100">
         		<a className="nav-item nav-link ml-auto" href="#Profile">Name Lastname</a>
            <a className="nav-item nav-link" onClick={this.toggle} id="Notifications" >Notifications</a>
            {/* Notifications popup*/}
            <Popover
                  className="shadow"
                  placement="bottom"
                  isOpen={this.state.popoverOpen}
                  target="Notifications"
                  toggle={this.toggle}>
              <PopoverBody>
                <Notifications
                  notifs={[
                    {text:"Someone stole your bike", time:'5'},
                    {text:"Your bike has arrived", time:'70'},
                    {text:"Thanks for ordering the bike", time:'3000'}
                  ]}
                />
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
