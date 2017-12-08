import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter'
import Filter2 from './components/Filter2'
import BookList from './components/BookList'
import Sort from './components/Sort'

class App extends Component {

  constructor(props){
    super(props)
      this.state = {
        filterText1: 'All',
        filterText2: 'All',
        filterText3: 'All',
        sortText1: 'None',
        sortText2: 'None'

      };
    }

  filterUpdate1(value){
    this.setState({
      filterText1: value
    })
  }

  filterUpdate2(value){
    this.setState({
      filterText2: value
    })
  }

  filterUpdate3(value){
    this.setState({
      filterText3: value
    })
  }

  sortUpdate1(value){
    this.setState({
      sortText1: value
    })
  }

  sortUpdate2(value){
    this.setState({
      sortText2: value
    })
  }
  


  render() {
    return (
      <div className="App">
      <div className="myNavigation">
        <nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div className="myBrand">
      <a className="navbar-brand" href="#">My Holiday Books</a>
      </div>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Shop Books<span className="sr-only">(current)</span></a></li>
        <li><a href="#">About us</a></li>
        
      </ul>
      
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

        <header className="App-header">
          <h2>Gift a book this holiday season!</h2>

            
              <Filter2
                data = {this.props.data}
                filterText3 = {this.state.filterText3}
                
                filterUpdate3={this.filterUpdate3.bind(this)}
                
              />
            
              <Filter
                data = {this.props.data}
                filterText1 = {this.state.filterText1}
                filterText2 = {this.state.filterText2}
                filterUpdate1={this.filterUpdate1.bind(this)}
                filterUpdate2={this.filterUpdate2.bind(this)}
              />

              <Sort
                data = {this.props.data}
                sortText1 = {this.state.sortText1}
                sortUpdate1={this.sortUpdate1.bind(this)}
              />
        </header>

        <main className="main_body">
          
          <BookList 
              data={this.props.data}
              filterText1={this.state.filterText1}
              filterUpdate1={this.filterUpdate1.bind(this)}
              filterText2={this.state.filterText2}
              filterUpdate2={this.filterUpdate2.bind(this)}
              filterText3={this.state.filterText3}
              filterUpdate3={this.filterUpdate3.bind(this)}
              sortText1 = {this.state.sortText1}
              sortUpdate1={this.sortUpdate1.bind(this)}/>
        </main>
        
      </div>
    );
  }
}

export default App;
