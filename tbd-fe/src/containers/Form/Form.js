import React, {Component} from 'react';
import './Form.scss'
import { fetchJobs } from '../../apiCalls';

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

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log()
    const jobs = await fetchJobs(this.state)
    console.log(jobs)
    this.props.setJobs(await jobs)
  }

  render() {
    const { keywords, location, radius, salary } = this.state;
    return(
      // <section className='form-section'>
        <form 
          onChange={e => this.handleChange(e)}
        >
          <label for="keywords_input" >
            Job Title / Keywords
          </label>
          <input 
            id="keywords_input"
            name='keywords' 
            value={keywords}
          />
          <label for="location_input">
            Location
          </label>
          <input 
            id="location_input"
            name='location' 
            value={location}
          />
          <label for="radius_input">
            Search Radius from Location
          </label>
          <input
            id="radius_input"
            name='radius' 
            value={radius}
            type="number"
          />
          <label for="salary_input">
            Desired Salary
          </label>
          <input
            id="salary_input"
            name='salary' 
            value={salary}
            type="number"
          />
          <button 
            className='form-btn' 
            onClick={(e) => this.handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      // {/* </section> */}
    )
  }
}

export default Form;