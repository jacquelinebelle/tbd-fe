import React, { Component } from 'react';
// import listings from './fakeListings';
import JobListing from '../../components/JobListing';
import { connect } from 'react-redux';
// import { cityThunk } from '../../thunks/cityThunk';
// import { getCityDetails } from '../../api/cityCalls';
import { setCurrentJob } from '../../actions';
import loading from '../../assets/loading.gif';
import './ResultsPage.scss';

export class ResultsPage extends Component {
    constructor() {
        super();
        this.state = {
            // cities: []
        }
    }

    // componentDidUpdate = async () => {
    //     if (!this.props.cities.length) {
    //         // const cities = await this.getCities(this.props.jobs);
    //         // this.props.cityThunk(cities);
    //         this.props.jobs.map(job => {
    //             this.props.cityThunk(job.location)
    //         })
    //     }
    // }
    

    // getCities = (jobs) => {
    //     return jobs.reduce((acc, job) => {
    //         if (!acc.includes(job.location)) {
    //             acc.push(job.location)
    //         }
    //         return acc;
    //     }, []);
    // }

    handleSeeMore = (e, par) => {
        e.preventDefault()
        console.log(par)
        // let foundJob = this.props.jobs.find(job => job.id === id);
        // this.props.setCurrentJob(foundJob)
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
                id={job.id}
                handleSeeMore={this.handleSeeMore}
                key={job.id}
            />
        })
    }

    render() {
        return (
            <main className="results-page">
                <section className="job-list">
                    {this.displayJobs()}
                </section>
                <section className="city-list">
                    {/* {this.props.loading && <img src={loading} />}
                   {!this.props.loading && this.displayCities()} */}
                </section>
            </main>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    setCurrentJob: job => dispatch(setCurrentJob(job)),
    // cityThunk: cities => dispatch(cityThunk(cities))
  });

export const mapStateToProps = ({ jobs, cities, loading, error }) => ({
    jobs,
    cities,
    loading,
    error
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);