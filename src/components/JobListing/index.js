import React from 'react';
import { Link } from 'react-router-dom';
// import JobDetailPage from '../JobDetailPage';
import './JobListing.scss'

export const JobListing = ({ lastModified, title, link, location, salary, company, snippet, type, id, handleSeeMore}) => {
    return (
        <article className="job">
            <p className="job-date">Updated on: {lastModified}</p>
            <h3 className="job-title">
                    {title}
            </h3>
            <h5 className="job-location">{location}</h5>
            <h5 className="job-salary">{type || "Type not Specified"}: {salary || 'No salary provided.'}</h5>
            <p className="job-company">{company}</p>
            <p className="job-description" dangerouslySetInnerHTML={{__html:snippet}}></p>
            <Link to={`/job/${id}`} >
                <button>Learn More About {location}</button>
            </Link>
        </article>
    )
}

export default JobListing;