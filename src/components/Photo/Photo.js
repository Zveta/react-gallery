import React from 'react';
import classes from './Photo.module.scss';

const photo = (props) => (
    <div className={classes.Photo} onClick={props.clicked}>
        <img src={props.url} alt="Фотография"/>
    </div>
);

export default photo;

