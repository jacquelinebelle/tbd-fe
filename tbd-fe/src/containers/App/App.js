import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form.js';

class App extends Component {

  componentDidMount() {
    console.log('Working')
    fetch('https://radiant-peak-49102.herokuapp.com/api/v1/listings?keywords=developer&location=portland')
    .then(data => data.json())
    .then(data => console.log(data.data.attributes.return_all_listings.jobs))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>LinkedIn Clone</h1>
        <Form />
      </div>
    )
  }
}

export default App;
