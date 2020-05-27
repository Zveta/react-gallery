import React from 'react';
import classes from './Input.module.scss';


const input = (props) => (
    <div>
        <label className='Hidden'>{props.label}</label>
        <input type="text" className={classes.Input} value={props.value} onChange={props.onchange} placeholder={props.label}/>
    </div>
);


export default input;