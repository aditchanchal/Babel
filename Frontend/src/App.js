import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewsGrid from './components/NewsGrid';
import Home from './components/Home';
import National from './components/National';
import NavBar2 from './components/NavBar2';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {locations:'LUCKNOW'};
		//this.handleChange = this.handleChange.bind(this);
		
	    this.handleLocation = (locationField)=> {
			this.setState({locations:locationField});
	  };
	}
  render(){
	  return (
		  <BrowserRouter>
				<div className="App" >
					<NavBar2 handleLocation={this.handleLocation} />
					<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/news" render={(props) => <NewsGrid {...props} location={this.state.locations}/>}/>
						<Route path="/national" component={National}/>

					</Switch>
				</div>
			</BrowserRouter>
	  );
  }
}

export default App;
