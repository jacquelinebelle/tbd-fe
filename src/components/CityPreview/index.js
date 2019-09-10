import React from 'react';
import './CityPreview.scss'

export const CityPreview = ({ name, img, housing, safety, healthcare, tolerance, rank }) => {

    return (
        <article className="city-preview">
            <img className="preview-img" src={img} />
            <div className="preview-info">
                <div className="name-rank">
                    <h3 className="preview-name">{name}</h3>
                    <p className="rank">Rank: {rank}</p>
                </div>
                <section className="preview-table">
                    <section className="table-headers">
                        <h4 className="table-header criteria">Criteria</h4>
                        <h4 className="table-header result-rank">Score</h4>
                    </section>
                    <section className="table-row">
                        <h5 className="row-header">
                            Housing:
                        </h5>
                        <p className="table-cell">
                            {`${parseFloat(housing).toFixed(2) * 10 }/100`}
                        </p>
                    </section>
                    <section className="table-row">
                        <h5 className="row-header">
                            Safety:
                        </h5>
                        <p className="table-cell">
                            {`${parseFloat(safety).toFixed(2) * 10 }/100`}
                
                        </p>
                    </section>
                    <section className="table-row">
                        <h5 className="row-header">
                            Healthcare:
                        </h5>
                        <p className="table-cell">
                            {`${parseFloat(healthcare).toFixed(2) * 10 }/100`}
                        </p>
                    </section>
                    <section className="table-row">
                        <h5 className="row-header">
                            Tolerance:
                        </h5>
                        <p className="table-cell">
                          {`${parseFloat(tolerance).toFixed(2) * 10 }/100`}
                        </p>
                    </section>
                </section>
            </div>

        </article>
    )
}

export default CityPreview;