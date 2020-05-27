import React from 'react';
import classes from './Footer.module.scss';
import moment from 'moment';

const footer = () => (
    <footer className={classes.Footer}>
        <p>© 2018-{moment().format('YYYY')}</p>
    </footer>
);

export default footer;