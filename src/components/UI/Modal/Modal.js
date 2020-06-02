import React from 'react';
import { bool, func, node } from 'prop-types';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({show, clicked, children}) => (
    <>
        <Backdrop show={show} clicked={clicked}/>
        <div
            className={show ? `${classes.Modal}` : `${classes.Modal} ${classes.Closed}`}
        >
            <button type='button' className={classes.Modal__close} onClick={clicked}>
                <span className="Hidden">Закрыть</span>
            </button>
            {children}
        </div>
    </>
);

Modal.propTypes = {
  show: bool.isRequired,
  clicked: func.isRequired,
  children: node.isRequired
};

export default Modal;
