import React from 'react';
import { bool, func } from 'prop-types';
import classes from './Backdrop.module.scss';


const Backdrop = ({show, clicked}) => (
    show ? <div role='button' tabIndex='0' aria-label='Close popup' className={classes.Backdrop} onClick={clicked} /> : null
);

Backdrop.propTypes = {
  show: bool.isRequired,
  clicked: func.isRequired,
};


export default Backdrop;
