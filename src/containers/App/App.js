import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ResultsPage from '../ResultsPage';
import './App.scss';
import Form from '../Form/';
import Header from '../Header';
import JobDetailPage from '../../components/JobDetailPage';
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
          <Route exact path={`/job/:id`} render={
                (id) => (<JobDetailPage id={id.location.pathname} history={id.history} />)
            }
            />
        </div>
      </Switch>
    )
  }
}

export default App;
