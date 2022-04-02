import React from 'react';
import Card from './Card'
// import Button from './Button' the Button component not working on - onClick so i rather use custom button
import classes from  './ErrorModal.module.css'

const ErrorModal = (props) => {
    return (
      <React.Fragment>
        <div className={classes.backdrop} onClick={props.onCloseError}></div>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>

          <footer className={classes.actions}>
            <button className={classes.button} onClick= {props.onCloseError}>Okay Brother</button>
          </footer>
        </Card>
      </React.Fragment>
    )
};

export default ErrorModal;
