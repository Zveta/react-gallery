import React from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.clicked}/>
        <div
            className={props.show ? `${classes.Modal}` : `${classes.Modal} ${classes.Closed}`}
        >
            <button className={classes.Modal__close} onClick={props.clicked}>
                <span className="Hidden">Закрыть</span>
            </button>
            {props.children}
        </div>
    </React.Fragment>
);

export default modal;