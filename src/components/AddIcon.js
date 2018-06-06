import React from 'react';
import {Link} from 'react-router';
// import '../css/EditIcons.css';

class AddIcon extends React.Component {
	render() {
		return (
			<Link to={this.props.link}>
      	<span><i className="material-icons circle-icon shadow hvr-grow">{this.props.icon}</i></span>
			</Link>
		);
  }
};

export default AddIcon;
