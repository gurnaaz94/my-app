import React, {Component} from 'react'


class BookList extends Component{

	render(){

		const { data, filterText1, filterUpdate1, filterText2, filterUpdate2,filterText3, filterUpdate3, sortText1, sortUpdate1, sortText2, sortUpdate2 } = this.props;
		// var items = data.map(item => {
		// 	return (
		// 		<div className="element">
		// 			<li key={item.name} className={item.author}> 
		// 						<img src={item.imgscr} style={{width: 50, height: 50}} /> <br />
		// 						{item.name} <br />
		// 						{item.price} <br />
		// 						{item.genre} <br />
		// 						{item.pubDate} <br />
		// 			</li>
		// 		</div>

		// 		)
		// })
		var items = data

		if (sortText1==="Price"){
			
			items =items.sort((a,b) => {
				//this.sortbyprice(a.price,b.price);
				return a.price-b.price;
			})
		}  

		else if (sortText1 === "Rating") {
			items = items.sort((a,b) =>{
				return b.rating-a.rating;
			})
		}

		else {
			items =items.sort((a,b) => {
				//this.sortbyprice(a.price,b.price);
				return a.id-b.id;
			//items = data

		} )
		}
			
			// items=items.map(item => {
				
			// 	return (
			// 		<div className="element">
			// 			<li key={item.name} className={item.author}> 
			// 				<img src={item.imgscr} style={{width: 50, height: 50}} /> <br />
			// 				{item.name} <br />
			// 				{item.price} <br />
			// 				{item.genre} <br />
			// 				{item.pubDate} <br />
			// 			</li>
			// 		</div>
			// 	)
			// })


			
		

		if(filterText1!="All"){
			items=items.filter(item => {
				return item.genre === filterText1 || item.lang === filterText1
			})
		} else {
			items = items
		}

		if(filterText2!="All"){
			items=items.filter(item => {
				return item.genre === filterText2 || item.lang === filterText2
			})
		} else {
			items = items
		}
		if(filterText3!="All"){
			items=items.filter(item => {
				return item.genre === filterText3 || item.lang === filterText3 || item.family_member === filterText3
			})
		} else {
			items = items
		}
			
		var filtered_items=items.map(item => {
					return (
						<div className="element">
							
							<div className="image">
								<img src={item.imgscr} style={{width: 155, height: 240}} /> <br />
							</div>
							<div className="info">
								<h4 style={{textAlign:"left"}}><b>{item.name} </b> <span style={{float:"right"}}>${item.price}&nbsp;&nbsp; </span> </h4>  
								<h5>By {item.author}<span style={{float:"right"}}>{item.lang}&nbsp;&nbsp; </span></h5>										
								
								<h5>Genre: {item.genre} &nbsp;&nbsp; </h5>
								<h5> Rating:&nbsp;{item.rating}/5</h5>

								

								<a href={item.amazon} target="_blank" style={{textAlign:"center"}}><button>Buy on Amazon</button></a>
								<a href={item.bookstore} target="_blank" style={{textAlign:"center"}}><button>Find nearest bookstore</button></a>
								 
							</div>
							
							
						</div>
					)
				})
		

		return(
			<div className="items">

				{filtered_items}
			</div>


			);
	}

		


}

export default BookList;