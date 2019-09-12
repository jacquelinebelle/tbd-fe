import React from 'react';
import { Link } from 'react-router-dom';
// import JobDetailPage from '../JobDetailPage';
import './JobListing.scss'

export const JobListing = ({ lastModified, title, link, location, salary, company, snippet, type, id, handleSeeMore}) => {
    return (
        <article className="job">
            <p className="job-date">Updated on: {lastModified}</p>
                <strong>
            <h3 className="job-title">
                    {title}
            </h3>
                </strong>
            <h5 className="job-location">{location}</h5>
            <Link to={`/job/${id}`} >
                <button>Learn More About {location}</button>
            </Link>
            <h5 className="job-salary">{type}: {salary || 'No salary provided.'}</h5>
            <p className="job-company">{company}</p>
            <p className="job-description" dangerouslySetInnerHTML={{__html:snippet}}></p>
        </article>
    )
}

export default JobListing;