import React, { Component } from 'react';
// import listings from './fakeListings';
import JobListing from '../JobListing';
import './ResultsPage.scss';
import { connect } from 'react-redux'
export class ResultsPage extends Component {

    displayJobs = () => {
        return this.props.jobs.map(job => {
            return <JobListing
                lastModified={job.updated}
                title={job.title}
                link={job.link}
                type={job.type}
                location={job.location}
                salary={job.salary}
                company={job.company}
                snippet={job.snippet}
                key={job.id}
            />
        })
    }

    render() {
        return (
            <main className="results-page">
                <ul className="job-list">
                    {this.displayJobs()}
                </ul>
                <ul className="city-list">
                    
                </ul>
            </main>
        )
    }
}

export const mapStateToProps = ({ jobs }) => ({
    jobs
})

export default connect(ResultsPage);