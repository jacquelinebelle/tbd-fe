import React, {Component} from 'react';
import { connect } from 'react-redux';
import { cityThunk } from '../../thunks/cityThunks';
import { getCityDetails } from '../../api/cityCalls';
import './JobDetailPage.scss'

export class JobDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            currJob: {},
            cityDetails: [],
            scores: false,
            details: false,
            shownDetail: ''
        }
    }

    componentDidMount = async () => {
        const id = parseInt(this.props.id.split('/')[2]);
        const currJob = this.props.jobs.find(job => job.id === id);
        this.setState({ currJob });
        const cityDetails = await getCityDetails(this.props.currentCity);
        this.setState({ cityDetails });

        this.props.cityThunk(currJob.location);
        
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
        return selectedDetail.data.map(datas => {
            let dataValue = Object.keys(datas).find(key => key.split('_').includes('value'));
            console.log(dataValue)
            return <p className={`detail-data`}>{datas.label}: {datas[dataValue]}</p>
        })
    }

   render() {
        const { currentCity } = this.props;
        const { currJob } = this.state;
        return (
            <article className="job-detail">
                <img className="detail-img" src={currentCity.web} />
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
                <div className={`${this.state.scores} detail-city-more`} >
                    <h4 className="detail-title" onClick={(e, scores) => this.handleState(e, 'scores')}>All Scores</h4>
                    <section className="city-scores">
                        {this.state.scores && this.displayScores()}
                    </section>
                </div>
                <div className={`${this.state.details} detail-city-more`}>
                    <h4 className="detail-title" onClick={(e, details) => this.handleState(e, 'details')}>All Details</h4>
                    <section className='city-details'>
                        {(this.state.details && this.state.shownDetail === '') && this.displayDetails()}
                        <div className="shownDetail" onClick={(e, label) => this.selectDetail(e, '')}>
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

export const mapStateToProps = ({ jobs, currentCity }) => ({
    jobs,
    currentCity
})

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailPage);