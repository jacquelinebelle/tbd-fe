import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ResultsPage from '../ResultsPage';
import './App.scss';
import Form from '../Form/';
import JobListingContainer from '../../components/JobListingContainer/JobListingContainer';

class App extends Component {
constructor() {
  super()
  this.state={
    
  }
}

  render() {
    return (
      <div className="App">
        <h1>tbd</h1>
        <Switch>
          <Route 
            exact path='/' 
            render={ () => <Form/> } 
          />
          <Route 
            exact path='/results' 
            render={ () => <ResultsPage jobs={this.state.jobs}/> } 
          />
        </Switch>

      </div>
    )
  }
}

export default App;
