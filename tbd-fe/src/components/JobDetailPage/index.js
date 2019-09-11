import React, {Component} from 'react';
import { connect } from 'react-redux';
import { cityThunk } from '../../thunks/cityThunk';
import './JobDetailPage.scss'

export class JobDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            currJob: {}
        }
    }

    componentDidMount = () => {
        const id = parseInt(this.props.id.split('/')[2]);
        const currJob = this.props.jobs.find(job => job.id === id);
        this.setState({ currJob });
        this.props.cityThunk(currJob.location);
        
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
                        <p className="detail-city-summary">
                            {currentCity.summary}
                        </p>
                        <p className="detail-teleport-score">
                            {`Overal Teleport Score: ${parseFloat(currentCity.teleport_city_score).toFixed(2)}`}
                        </p>
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