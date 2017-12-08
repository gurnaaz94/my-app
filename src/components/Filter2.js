import React, {Component} from 'react'
import { DropdownButton, MenuItem} from 'react-bootstrap';
import BookList from './BookList'

class Filter2 extends Component {


	func3 = (eventKey, event) =>
	{
		this.props.filterUpdate3(eventKey)

	}

	

	render() {
		const {data, filterText3, filterUpdate3} = this.props;
		
		console.log('Data here is', this.props.data)
		console.log('filtertext value',this.props.filterText3)
		return (
			<div className="filter-list-2">

				<div className="list3">
					Who do you want to buy a book for? &nbsp; &nbsp; &nbsp; 
				
					<DropdownButton bsStyle = "primary" onSelect={this.func3} id="typeDropdown" title={filterText3}>
						<MenuItem eventKey="All" >All</MenuItem>
						<MenuItem eventKey="Son">Son</MenuItem>
						<MenuItem eventKey="Daughter">Daughter</MenuItem>
						<MenuItem eventKey="Brother">Brother</MenuItem>
						<MenuItem eventKey="Sister">Sister</MenuItem>
						<MenuItem eventKey="Mom">Mom</MenuItem>
						<MenuItem eventKey="Dad">Dad</MenuItem>
						<MenuItem eventKey="Grandparents">Grandparents</MenuItem>
					</DropdownButton>
				</div>

			





				

			</div>

				
			

	);
	}
}

export default Filter2;