import React from 'react';
import {Link} from 'react-router';
// import '../css/EditIcons.css';

class AddIcon extends React.Component {
	render() {
		return (
			<Link to="/newproject">
      	<span><i className="material-icons circle-icon shadow hvr-grow">add</i></span>
			</Link>
		);
  }
};

export default AddIcon;
