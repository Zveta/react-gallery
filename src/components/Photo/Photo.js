import React from 'react';
import { func, string } from 'prop-types';
import classes from './Photo.module.scss';

const Photo = ({clicked, url}) => {
  return (
    <div role='button' tabIndex='0' className={classes.Photo} onClick={clicked}>
      <img src={url} alt="Фотография"/>
    </div>
  )
};

Photo.propTypes = {
  clicked: func.isRequired,
  url: string.isRequired,
};

export default Photo;

