import React, {Component} from 'react';
import { connect } from 'react-redux';
import { cityThunk } from '../../thunks/cityThunks';
import { getCityDetails, getCitySalaries } from '../../api/cityCalls';
import './JobDetailPage.scss'

export class JobDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            currJob: {},
            details: [],
            scores: false,
        }
    }

    componentDidMount = async () => {
        const id = parseInt(this.props.id.split('/')[2]);
        const currJob = this.props.jobs.find(job => job.id === id);
        const details = await getCityDetails(this.props.currentCity);

        this.props.cityThunk(currJob.location);
        // console.log(details)
        const  salaries = await getCitySalaries("Denver")
        console.log(await salaries)
        this.setState({ currJob, details, salaries });
    }

    handleState = (e, key) => {
        this.setState({ [key]: !this.state[key] })
    }

    displayScores = () => {
        return this.props.currentCity.categories.map(cat => {
            let scoreType;
            if (cat.score_out_of_10 >= 7) {
                scoreType = 'good'
            } else if (cat.score_out_of_10 <= 4) {
                scoreType = 'bad'
            }
            return <p className={`${scoreType}-score`}>{cat.name}: {parseFloat(cat.score_out_of_10).toFixed(2)}/10</p>
        })
    }

    pickSalaries =() => {
        if(this.state.salaries) {
            return this.state.salaries.map(salary => {
                return (
                    <option value={salary.job.id}>
                        {salary.job.title}
                    </option>
                ) 
            })
        }
    }

   displayDetails = async () => {
    //     const details = await getCityDetails(this.props.currentCity);
    //    console.log(details)
    //     return details.map(det => {
    //         return <p>{det.data[0].label}</p>
    //     })
    }

    changeSalary = (e) => {
        if(e.target.value !== "default") {
            const salary = this.state.salaries.find(foundSal => {
                return foundSal.job.id === e.target.value
            })
            this.setState({salary})
        }
    }

    

   render() {
        const { currentCity } = this.props;
        const { currJob } = this.state;
        return (
            <article className="job-detail">
                <img alt={currentCity.city + " background image of city"} className="detail-img" src={currentCity.web} />
                <div className="detail-sections-container">
                    <section className="job-details-section">
                        <h3 className="details-job-title">{currJob.title}</h3>
                        <a href={currJob.link}>Link to the listing.</a>
                        <p className="detail-job-salary">
                            {currJob.salary}
                        </p>
                        <p className="detail-snippet">
                            {currJob.snippet}
                        </p>
                        <p className="detail-job-update">
                            {currJob.updated}
                        </p>
                    </section>
                    <section className="city-details-section">
                        <h3>{currJob.location}</h3>
                        <p className="detail-city-disclaimer">Based on nearest major city.</p>
                        <p className="detail-city-summary"
                            dangerouslySetInnerHTML={{__html: currentCity.summary}}>
                        </p>
                        <p className="detail-teleport-score">
                            {`Overal Teleport Score: ${parseFloat(currentCity.teleport_city_score).toFixed(2)}`}
                        </p>
                    </section>
                </div>
                <div className={`${this.state.scores} detail-city-more`} onClick={(e, scores) => this.handleState(e, 'scores')}>
                    <h4 className="detail-title">All Scores</h4>
                    <section className="city-scores">
                        {this.state.scores && this.displayScores()}
                    </section>
                </div>
                <div className={`${this.state.details} detail-city-more`} onClick={(e, details) => this.handleState(e, 'details')}>
                    <h4 className="detail-title">All Details</h4>
                    <section className="salary-details">
                        <select on onChange={this.changeSalary}>
                            <option value="default">
                                Pick a salary
                            </option>
                            {this.pickSalaries()}
                        </select>
                        {this.state.salary && 
                            <>
                            <p>Job Title: {this.state.salary.job.title}</p>
                            <p>25th Salary Percentile: ${parseFloat(this.state.salary.salary_percentiles.percentile_25).toFixed(2)}</p>
                        <p> 50th Salary Percentile: ${parseFloat(this.state.salary.salary_percentiles.percentile_50).toFixed(2)}</p>
                        <p>75th Percentile: ${parseFloat(this.state.salary.salary_percentiles.percentile_75).toFixed(2)}</p>
                        </>
                        }
                        {/* {this.displayDetails()} */}
                    </section>
                </div>
            </article>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    // setCurrentCity: city => dispatch(setCurrentCity(city)),
    cityThunk: city => dispatch(cityThunk(city))
  });

export const mapStateToProps = ({ jobs, currentCity }) => ({
    jobs,
    currentCity
})

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailPage);