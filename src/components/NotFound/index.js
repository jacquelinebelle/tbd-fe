import React from 'react';
import { Link } from 'react-router-dom';
import lost from '../../assets/lost.svg';
import './NotFound.scss'

export const NotFound = () => {
    return (
        <article className="not-found">
            <h2>Nothing here...</h2>
            <img src={lost} alt="404: query not found" />
            <Link className="form-link" to='/'>Search again?</Link>
        </article>
    )
}

export default NotFound;