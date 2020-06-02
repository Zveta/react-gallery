import React from 'react';
import moment from 'moment';
import classes from './Footer.module.scss';

const Footer = () => (
    <footer className={classes.Footer}>
        <p>© 2018-{moment().format('YYYY')}</p>
    </footer>
);

export default Footer;
