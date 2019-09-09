import React, { Component } from 'react';
// import listings from './fakeListings';
import JobListing from '../../components/JobListing';
import CityPreview from '../../components/CityPreview';
import { connect } from 'react-redux';
import { scoreThunk } from '../../thunks/cityThunks';
// import { getCityDetails } from '../../api/cityCalls';
// import { gatherCities } from '../../actions';
import loading from '../../assets/loading.gif';
import './ResultsPage.scss';

export class ResultsPage extends Component {
    constructor() {
        super();
        this.state = {
            loading: false
        }
    }

    componentDidUpdate = async () => {
        if (!this.props.cities.length) {
            const cities = await this.getCities(this.props.jobs);
            this.props.scoreThunk(cities);
        }
    }
    

    getCities = (jobs) => {
        return jobs.reduce((acc, job) => {
            if (!acc.includes(job.location)) {
                acc.push(job.location)
            }
            return acc;
        }, []);
    }

    displayCities = () => {
        console.log(this.getRank())
        if (this.props.cities.length) {
            return this.props.cities.reduce((acc, city) => {
                if (!city.message) {
                    acc.push(
                    <CityPreview 
                        name={city.city}
                        img={city.web}
                        housing={city.categories[0].score_out_of_10}
                        safety={city.categories[7].score_out_of_10}
                        healthcare={city.categories[8].score_out_of_10}
                        tolerance={city.categories[15].score_out_of_10}
                        rank={this.getRank(city)}
                    />)
                        
                }
                return acc
            }, []);
        }
    }

    getRank = (city) => {
        console.log(city)
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
                {/* <section className="city-list">
                    {this.props.loading && <img src={loading} />}
                   {!this.props.loading && this.displayCities()}
                </section> */}
            </main>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    scoreThunk: cities => dispatch(scoreThunk(cities))
  });

export const mapStateToProps = ({ jobs, cities, loading, error }) => ({
    jobs,
    cities,
    loading,
    error
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);