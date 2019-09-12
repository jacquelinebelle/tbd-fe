import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { cityThunk } from '../../thunks/cityThunks';
import { getCityDetails, getCitySalaries } from '../../api/cityCalls';
import compass from '../../assets/blurry-compass.png'
import './JobDetailPage.scss'
import defaultCity from '../../assets/defaultCity.jpg'
export class JobDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            currJob: {},
            cityDetails: [],
            scores: false,
            details: false,
            showSalaries:false,
            shownDetail: ''
        }
    }

    componentDidMount = async () => {
        const id = parseInt(this.props.id.split('/')[2]);
        const currJob = this.props.jobs.find(job => job.id === id);
        const cityDetails = await getCityDetails(this.props.currentCity);
        
        if ((currJob === undefined) && (!this.props.loading)) {
            console.log(currJob)
            return;
        }

        this.props.cityThunk(currJob.location);
        const  salaries = await getCitySalaries("Denver")
        this.setState({ currJob, cityDetails, salaries });
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
        });
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

   displayDetails = () => {
       return this.state.cityDetails.map(det => {
            return <div className={`detail-label`} onClick={(e, label) => this.selectDetail(e, det.label)}>
                <p>{det.label}</p>
            </div>
        });
    }

    selectDetail = (e, label) => {
        this.setState({ shownDetail: label })
    }

    revealDetails = () => {
        let label = this.state.shownDetail
        const selectedDetail = this.state.cityDetails.find(det => det.label === label);
        
        return (
            selectedDetail.data.map(datas => {
                let dataValue = Object.keys(datas).find(key => key.split('_').includes('value'));
                return <p className={`detail-data`}>{datas.label}: {datas[dataValue]}</p>
            })
        )
    }

    changeSalary = (e) => {
        if(e.target.value !== "default") {
            const salary = this.state.salaries.find(foundSal => {
                return foundSal.job.id === e.target.value
            })
            this.setState({salary})
        }
    }

    hideDetails =() => {
        this.setState({shownDetail:''})
    }

    swapImage  =() => {
        if(this.props.currentCity.city === undefined){
            return (
                <img 
                    className="details-loading-image" 
                    alt="Loading... Please Wait" 
                    src={compass} 
                />
            ) 
        } else if (this.props.currentCity.city !== undefined && this.props.currentCity.web === undefined) {
            return (
                <img 
                    alt={"default vector city background"} 
                    className="detail-img" 
                    src={defaultCity} 
                />
            )
        } else {
            return (
                <img 
                    alt={this.props.currentCity.city + " background image of city"} className="detail-img" 
                    src={this.props.currentCity.web} 
                /> 
            ) 
        }
    }

   render() {
        const { currentCity } = this.props;
        const { currJob } = this.state;
        return (
            <article className="job-detail">
                {(currJob === undefined && !this.props.loading) && <Redirect to='/404'/>}
                { this.swapImage() }
                {(currentCity.city === undefined) && <h3 className="loading-city">One moment as we find details about this city.</h3>}
                    {(currentCity.city !== undefined) && <div className="detail-sections-container">
                    <section className="job-details-section">
                        <h3 className="details-job-title">{currJob.title}</h3>
                        <a href={currJob.link}>Link to the listing.</a>
                        <p className="detail-job-salary">
                            {currJob.salary}
                        </p>
                        <p className="detail-snippet" dangerouslySetInnerHTML={{__html:currJob.snippet}}>
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
                </div>}
                <div className={`${this.state.scores} detail-city-more`} >
                    <h4 className="detail-title" onClick={(e, scores) => this.handleState(e, 'scores')}>All Scores</h4>
                    <section className="city-scores">
                        {this.state.scores && this.displayScores()}
                    </section>
                </div>
                <div 
                    className={`${this.state.details} detail-city-more`} 
                    >
                    <h4 
                    className="detail-title"
                    onClick={(e) => this.handleState(e, 'showSalaries')}
                    >Salaries</h4>
                    {this.state.showSalaries && 
                    <section 
                        className="salaryDetails">
                                <select 
                                    onChange={this.changeSalary}>
                                    <option value="default">Pick a salary</option>
                                    {this.pickSalaries()}
                                </select>
                        { this.state.salary && 
                        <>
                            <h3>{this.state.salary.job.title}</h3>
                            <div className='salary-info'>
                                <p><strong>25th Salary Percentile:</strong> ${parseFloat(this.state.salary.salary_percentiles.percentile_25).toFixed(2)}</p>
                                <p><strong>50th Salary Percentile:</strong> ${parseFloat(this.state.salary.salary_percentiles.percentile_50).toFixed(2)}</p>
                                <p><strong>75th Percentile:</strong> ${parseFloat(this.state.salary.salary_percentiles.percentile_75).toFixed(2)}</p>
                            </div>
                        </>
                        }
                    </section>
                    }
                </div>
                <div className={`${this.state.details} detail-city-more`}>
                    <h4 className="detail-title" onClick={(e) => this.handleState(e, 'details')}>All Details</h4>
                    <section className='city-details'>
                        {(this.state.details && this.state.shownDetail === '') && this.displayDetails()}
                        <div className="shownDetail" onClick={(e) => this.selectDetail(e, '')}>
                            {this.state.shownDetail && <button onClick={this.hideDetails}>Go Back</button>}
                            {this.state.shownDetail && this.revealDetails()}
                        </div>
                    </section>
                </div>
            </article>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    cityThunk: city => dispatch(cityThunk(city))
  });

export const mapStateToProps = ({ jobs, currentCity, loading }) => ({
    jobs,
    currentCity,
    loading
})

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailPage);