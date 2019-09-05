import React, { Component } from 'react';
import { getJobs } from '../../api/jobCalls';
import './Form.scss'
import { gatherJobs } from '../../actions/'
import { connect } from 'react-redux'
class Form extends Component {
  constructor() {
    super();
    this.state = {
      keywords: '',
      location: '',
      radius: '',
      salary: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const jobs = await getJobs(this.state);
    console.log(jobs)
    this.props.setJobs(await jobs)
    
  }

  render() {
    const { keywords, location, radius, salary } = this.state;
    return (
      <form 
        className="search-form"
        onChange={this.handleChange}>
        <label className="search-label">Job Title / Keywords
          <input 
            className="form-input keyword-input"
            type="text"
            name='keywords' 
            value={keywords} />
        </label>
        <label className="search-label">Desired Salary
          <input 
            className="form-input salary-input"
            type="text"
            name='salary' 
            value={salary} />
        </label>
        <label className="search-label">Location
          <input 
            className="form-input location-input"
            type="text" 
            name='location' 
            value={location} />
        </label>
        <label className="search-label radius-label">Location Radius
          <input
            className="form-input radius-input"
            type="number"  
            name='radius' 
            value={radius} />
        </label>
        <button className='form-btn' onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setJobs: (jobs) => dispatch(gatherJobs(jobs))
})

export default connect(null, mapDispatchToProps)(Form);