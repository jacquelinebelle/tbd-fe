import React, { Component } from 'react'
import { connect } from 'react-redux'

export class index extends Component {
  constructor() {
    super()
    this.state={
      email:'',
      password:''
    }
  }

  login = () => {
    console.log(this.state)
  }

  handleChange =(e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <div>
        <form>
          <input 
            placeholder="Email..."
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input 
            placeholder="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
          <button onClick={()=> this.login()}>

          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps =(dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
