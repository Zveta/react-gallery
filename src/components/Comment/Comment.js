import React from 'react';
import moment from "moment";
import classes from './Comment.module.scss';


const comment = (props) => (
   <div className={classes.Comment}>
       <p className={classes.Comment__time}>
           {moment(props.date).format('DD.MM.YYYY')}
       </p>
       <p className={classes.Comment__text}>{props.text}</p>
   </div>
);


export default comment;