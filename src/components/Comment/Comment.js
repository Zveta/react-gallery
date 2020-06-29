import React from 'react';
import moment from "moment";
import { string, number } from 'prop-types';
import classes from './Comment.module.scss';

const Comment = ({date, text}) => {
  return (
    <div className={classes.Comment}>
      <p className={classes.Comment__time}>
        {moment(date)
          .format('DD.MM.YYYY')}
      </p>
      <p className={classes.Comment__text}>{text}</p>
    </div>
  )
};

Comment.propTypes = {
  date: number.isRequired,
  text: string.isRequired
};


export default Comment;
