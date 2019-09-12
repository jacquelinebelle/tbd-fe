import React, { Component } from 'react';
// import { getJobs } from '../../api/jobCalls';
import { jobsThunk } from '../../thunks/jobsThunk';
import './Form.scss';
import { gatherJobs } from '../../actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import {mockJobs} from '../../api/mockData';

export class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async () => {
    this.props.jobsThunk(this.state);
  }

  render() {
    return (
      <form 
        className="search-form"
        onChange={this.handleChange}>
        <label className="search-label">Job Title / Keywords
          <input 
            className="form-input keyword-input"
            type="text"
            name='keywords' 
          />
        </label>
        <label className="search-label">Desired Salary
          <input 
            className="form-input salary-input"
            type="text"
            name='salary' 
          />
        </label>
        <label className="search-label">Location
          <input 
            className="form-input location-input"
            type="text" 
            name='location' 
          />
        </label>
        <label className="search-label radius-label">Location Radius
          <input
            className="form-input radius-input"
            type="number"  
            name='radius' 
          />
        </label>
        <Link to="/results" >
        <button 
          className='form-btn' 
          onClick={this.handleSubmit}
          style={this.state.keywords ? {backgroundColor: '#1e91ca'} :{backgroundColor: '#B2D1E4'}}
          >
            Submit
        </button>
        </Link>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  jobsThunk: params => dispatch(jobsThunk(params)),
  gatherJobs: jobs => dispatch(gatherJobs(jobs))
});

export default connect(null, mapDispatchToProps)(Form);