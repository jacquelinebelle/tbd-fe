import React, { Component } from 'react';
// import { getJobs } from '../../api/jobCalls';
import { jobsThunk } from '../../thunks/jobsThunk';
import './Form.scss';
import { gatherJobs } from '../../actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Form extends Component {


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async () => {
    this.props.jobsThunk(this.state);
    // const jobs = await getJobs(this.state);
    // this.props.setJobs(await jobs);
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
        <Link to="/results">
        <button 
          className='form-btn' 
          onClick={this.handleSubmit}
          >
            Submit
        </button>
        </Link>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  jobsThunk: params => dispatch(jobsThunk(params))
});

export default connect(null, mapDispatchToProps)(Form);