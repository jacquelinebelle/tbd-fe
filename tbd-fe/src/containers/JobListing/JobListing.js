import React, { Component } from 'react'
// import { webScraper } from '../../scraper';

export class JobListing extends Component {
  constructor() {
    super()
    this.state={

    }
  }

  async componentDidMount() {
    // const scrapedData = await webScraper(this.props.link)
    // console.log(await scrapedData)
    console.log("bammmers")
  }

  render() {
    const { title, location, snippet, salary, company, link } = this.props.jobData
    return (
      <div>
        <h3>{title}</h3>
        <p>Location: {location}</p>
        <p>{salary}</p>
        <p>{company}</p>
        <p>{snippet}</p>
        <button
        >
          More Details
        </button>
      </div>
    )
  }
}

export default JobListing
