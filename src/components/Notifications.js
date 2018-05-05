import React, { Component } from 'react';
import '../css/Notification.css';

class Notifications extends Component {

  render() {
    return (
      <div>

      	<div class="notification rounded m-2 p-1">
      		<h6>
      			Someone stole your bike!
      		</h6>
      		<p class="text-right font-weight-light font-italic m-0">
      			5 mins ago
      		</p>
      	</div>

      	<hr class="m-2"/>

      	<div class="notification rounded m-2 p-1">
      		<h6>
      			Your new bike has arrived!
      		</h6>
      		<p class="text-right font-weight-light font-italic  m-0">
      			20 mins ago
      		</p>
      	</div>

      	<div class="m-2">
      		<button class="btn  btn-sm btn-block">Mark as read</button>
      	</div>

      </div>
    );
  }
};
export default Notifications;
/*https://medium.com/the-codelog/intro-to-react-js-a37696fd99af*/
