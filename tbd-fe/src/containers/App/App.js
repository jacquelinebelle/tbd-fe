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
      <Switch>
        <div className="App">
          <h1>tbd</h1>
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
