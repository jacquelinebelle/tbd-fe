import React, { Component } from 'react';
// import listings from './fakeListings';
import JobListing from '../JobListing';
import { connect } from 'react-redux';
import { cityThunk } from '../../thunks/cityThunk';
// import { getCityDetails } from '../../api/cityCalls';
import { gatherCities } from '../../actions';
import './ResultsPage.scss';

export class ResultsPage extends Component {
    constructor() {
        super();
        this.state = {
            // cities: []
        }
    }

    componentDidUpdate = async () => {
        const cities = await this.getCities(this.props.jobs);
        this.props.cityThunk(cities);
        // console.log(cityDetails)
    }
    

    getCities = (jobs) => {
        return jobs.reduce((acc, job) => {
            if (!acc.includes(job.location)) {
                acc.push(job.location)
                // this.state.cities.push(job.location);
            }
            return acc;
        }, []);
    }

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

export const mapDispatchToProps = dispatch => ({
    cityThunk: cities => dispatch(cityThunk(cities))
  });

export const mapStateToProps = ({ jobs }) => ({
    jobs
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);