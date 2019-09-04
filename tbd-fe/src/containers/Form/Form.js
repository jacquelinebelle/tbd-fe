import React, {Component} from 'react';
import './Form.scss'

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

  render() {
    const { keywords, location, radius, salary } = this.state;
    return(
      // <section className='form-section'>
        <form onChange={e => this.handleChange(e)}>
          <label>Job Title / Keywords</label>
          <input name='keywords' value={keywords}></input>
          <label>Location</label>
          <input name='location' value={location}></input>
          <label>Search Radius from Location</label>
          <input name='radius' value={radius}></input>
          <label >Desired Salary</label>
          <input name='salary' value={salary}></input>
          <button className='form-btn'>Submit</button>
        </form>
      // {/* </section> */}
    )
  }
}

export default Form;