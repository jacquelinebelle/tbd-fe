import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from '../Form';
import ResultsPage from '../ResultsPage';
import './App.scss';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <h1>tbd</h1>
        <Switch>
          <Route exact path='/' render={ () => <Form /> } />
          <Route exact path='/results' render={ () => <ResultsPage /> } />
        </Switch>

      </div>
    )
  }
}

export default App;
