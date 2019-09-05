import React, { Component } from 'react';
import listings from './fakeListings';
import JobListing from '../JobListing';
import './ResultsPage.scss';

class ResultsPage extends Component {

    // displayJobs = () => {
    //     return listings.map(job => {
    //         return <JobListing
    //             lastModified={job.updated}
    //             title={job.title}
    //             link={job.link}
    //             type={job.type}
    //             location={job.location}
    //             salary={job.salary}
    //             company={job.company}
    //             snippet={job.snippet}
    //             key={job.id}
    //         />
    //     })
    // }

    render() {
        return (
            <main className="results-page">
                <ul className="job-list">
                    {/* {this.displayJobs()} */}
                </ul>
                <ul className="city-list">
                    
                </ul>
            </main>
        )
    }
}

export default ResultsPage;