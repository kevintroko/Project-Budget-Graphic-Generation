import React from 'react';
import {Filter} from './Filter';

/*
	Expects array called filters containing names of filters to implement
*/
export class FilterBar extends React.Component {

	constructor(props){
		super(props);

		this.onFilterChange = this.onFilterChange.bind(this);
	}

	onFilterChange(filterText){
		let activeFilter = this.props.activeFilter;
		let ascending = this.props.isOrderAsc;

		for(var i=0; i<this.props.filters.length; i++){
      if(this.props.filters[i] === filterText){
        if(i === this.props.activeFilter){
          ascending *= -1;
        }else{
          activeFilter = i;
					ascending = 1;
        }
        break;
      }
    }
		this.props.onFilterChange(activeFilter, ascending);
	}

	render() {
		if(this.props.filters){
			let filters = this.props.filters.map((text,i) => (
				<Filter text={text}
					onClick={this.onFilterChange}
					isAscending={(!(this.props.activeFilter === i) || (this.props.isOrderAsc === 1))}
					isActive={this.props.activeFilter === i}
				/>
			));
			return (
	        <div className="row filter box-shadow d-flex justify-content-around p-2">
						{filters}
					</div>
	      );
		}else{
			return null;
		}
	}
};
