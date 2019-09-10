import React from 'react';
import './JobListing.scss'

export const JobListing = ({ lastModified, title, link, location, salary, company, snippet, type }) => {
    return (
        <article className="job">
            <p className="job-date">Last modified: {lastModified}</p>
            <h3 className="job-title">
                <a className="job-title" href={link}>
                    {title}
                </a>
            </h3>
            {/* <h5 className="job-type">{type}</h5> */}
            <h5 className="job-location">{location}</h5>
            <h5 className="job-salary">{type}: {salary || 'No salary provided.'}</h5>
            <p className="job-company">{company}</p>
            <p className="job-description">{snippet}</p>
        </article>
    )
}

export default JobListing;