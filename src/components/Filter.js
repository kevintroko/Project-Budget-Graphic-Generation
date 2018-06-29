import React from 'react';
const icon="arrow_drop_down";
const icon_up="arrow_drop_up";


export class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.onClick(this.props.text);
  }

  render(){
		let resultIcon;
		if(this.props.isAscending){
			resultIcon = icon_up;
		} else {
			resultIcon = icon;
		}

		let text = this.props.isActive ? 	<u>{this.props.text}</u> : this.props.text;
    return (
			<div className="p-2 filter-text"
				onClick={this.handleClick}>
				{text}
				<i className="material-icons vertical-align-middle padding-bottom-3">{resultIcon}</i>
			</div>
		);
  }
}
Filter.defaultProps={text: 'SAMPLE', isAscending: false};
