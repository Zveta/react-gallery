import React from 'react';
import { string, func } from 'prop-types';
import classes from './Input.module.scss';


const Input = ({label, value, onchange, id}) => (
    <div>
        <label htmlFor={id} className='Hidden'>{label}</label>
        <input id={id} type="text" className={classes.Input} value={value} onChange={onchange} placeholder={label}/>
    </div>
);

Input.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  onchange: func.isRequired,
  id: string.isRequired
};


export default Input;
