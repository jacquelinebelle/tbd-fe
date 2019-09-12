import React, { Component } from 'react';
// import listings from './fakeListings';
import JobListing from '../../components/JobListing';
import { connect } from 'react-redux';
// import { cityThunk } from '../../thunks/cityThunk';
// import { getCityDetails } from '../../api/cityCalls';
import { setCurrentJob } from '../../actions';
import compass from '../../assets/blurry-compass.png'
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

    getRank = (city) => {
        if (!city) {
            return;
        }

        let scores = this.props.cities.map(city => {
            return city.teleport_city_score;
        });
        let sortedScores = scores.filter(score => score).sort();

        let index = sortedScores.findIndex(score => score === city.teleport_city_score);
        return `${index + 1}/${sortedScores.length}`;
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
                    {this.props.loading && <img className="loading-image" alt="Loading... Please Wait" src={compass} />}
                    {this.displayJobs()}
                </section>
                {!this.props.loading && !this.props.jobs.length &&
                    <h2 className='no-results'>NO RESULTS FOUND. CLICK THE LOGO TO SEARCH AGAIN.</h2>
                }
            </main>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    // scoreThunk: cities => dispatch(scoreThunk(cities)),
    setCurrentJob: job => dispatch(setCurrentJob(job))
    // cityThunk: cities => dispatch(cityThunk(cities))
  });

export const mapStateToProps = ({ jobs, cities, loading, error }) => ({
    jobs,
    cities,
    loading,
    error
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);