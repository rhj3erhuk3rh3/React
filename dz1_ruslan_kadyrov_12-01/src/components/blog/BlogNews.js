import React from 'react';
import classes from './blogNews.module.css';


export const BlogNews = ({ item_data }) => {
    let { title, body } = item_data; // Диструктивное присвоение

    return (
        <ul className={classes.blog}  >
            <h3> {title} </h3>
            <p> {body} </p>
        </ul>
    )
}

