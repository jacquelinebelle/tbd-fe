import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ResultsPage from '../ResultsPage';
import './App.scss';
import Form from '../Form/';
import Header from '../Header';
// import JobListingContainer from '../../components/JobListingContainer/JobListingContainer';

export class App extends Component {
constructor() {
  super()
  this.state={
    
  }
}

  render() {
    return (
      <Switch>
        <div className="App">
          <img src='https://wallpapercave.com/wp/wp3594884.jpg' className='result-background'/>
          <Header />
          <Route 
            exact path='/' 
            render={ () => <Form/> } 
          />
          <Route 
            exact path='/results' 
            component={ResultsPage} 
          />

        </div>
      </Switch>
    )
  }
}

export default App;
