import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form.js';
import JobListingContainer from '../../components/JobListingContainer/JobListingContainer';
import { fetchJobs } from '../../apiCalls';

class App extends Component {
constructor() {
  super()
  this.state={
    jobs:[]
  }
}

  setJobs = (jobs) => {
    this.setState({jobs})
  }

  render() {
    return (
      <div className="App">
        <h1>LinkedIn Clone</h1>
        <Form setJobs={this.setJobs}/>
        <JobListingContainer jobs={this.state.jobs}/>
      </div>
    )
  }
}

export default App;
