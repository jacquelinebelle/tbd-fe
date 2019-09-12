import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ResultsPage from '../ResultsPage';
import './App.scss';
import Form from '../Form/';
import Header from '../Header';
import JobDetailPage from '../../containers/JobDetailPage';
import NotFound from '../../components/NotFound';
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
          <img alt="aerial view of a cirty with scyscrapers" src='https://wallpapercave.com/wp/wp3594884.jpg' className='result-background'/>
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
            <Route 
            exact path='/404' 
            component={NotFound} 
          />
          <Route render={() => <Redirect to="/404" />} />
        </div>
      </Switch>
    )
  }
}

export default App;
