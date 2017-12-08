import React, {Component} from 'react'
import { DropdownButton, MenuItem} from 'react-bootstrap';
import BookList from './BookList'

class Filter extends Component {


	func1 = (eventKey, event) =>
	{
		this.props.filterUpdate1(eventKey)

	}

	func2 = (eventKey, event) =>
	{
		this.props.filterUpdate2(eventKey)

	}

	render() {
		const {data, filterText1, filterUpdate1, filterText2, filterUpdate2} = this.props;
		
		console.log('Data here is', this.props.data)
		console.log('filtertext value',this.props.filterText1)
		return (
			<div className="filter-list">

				



				<div className="list1">

					Genre: &nbsp; &nbsp; &nbsp;
				
					<DropdownButton bsStyle = "primary" onSelect={this.func1} id="typeDropdown" title={filterText1}>
						<MenuItem eventKey="All" >All</MenuItem>
						<MenuItem eventKey="Science Fiction">Science Fiction</MenuItem>
						<MenuItem eventKey="Thrillers & Suspense ">Thrillers & Suspense</MenuItem>
						<MenuItem eventKey="Women's Fiction">Women's Fiction</MenuItem>
						<MenuItem eventKey="Arts & Literature">Arts & Literature</MenuItem>
						<MenuItem eventKey="Action & Adventure">Action & Adventure</MenuItem>
						<MenuItem eventKey="Contemporary">Contemporary</MenuItem>
						<MenuItem eventKey="Mystery">Mystery</MenuItem>
						<MenuItem eventKey="Historical">Historical</MenuItem>
						<MenuItem eventKey="Horror">Horror</MenuItem>
						<MenuItem eventKey="Fairy Tales">Fairy Tales</MenuItem>
						<MenuItem eventKey="Family">Family</MenuItem>
					</DropdownButton>
				</div>




			
				<div className="list2">

				Language: &nbsp; &nbsp; &nbsp;

					<DropdownButton bsStyle = "primary" onSelect={this.func2} id="typeDropdown" title={filterText2}>
						<MenuItem eventKey="All">All</MenuItem>
						<MenuItem eventKey="English">English</MenuItem>
						<MenuItem eventKey="French">French</MenuItem>
						<MenuItem eventKey="Russian">Russian</MenuItem>
					</DropdownButton>
				</div>


				

			</div>

				
			

	);
	}
}

export default Filter;