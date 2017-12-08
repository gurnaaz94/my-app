import React, {Component} from 'react'
import { DropdownButton, MenuItem} from 'react-bootstrap';
import BookList from './BookList'

class Sort extends Component{

	func = (eventKey, event) =>
	{
		this.props.sortUpdate1(eventKey)

	}
	
	render(){
		const {data, sortText1, sortUpdate1} = this.props;
		console.log('sortText here is:', this.props.sortText1);
		return(
			<div className="sort-list">
			
				<DropdownButton bsStyle = "primary" onSelect={this.func} id="typeDropdown" title={"Sort By: "}>
					<MenuItem eventKey="None">None</MenuItem>
					<MenuItem eventKey="Price">Price</MenuItem>
					<MenuItem eventKey="Rating">Rating</MenuItem>

				</DropdownButton>
				

			</div>


			);


	}
}

export default Sort;