import React from 'react'
import classes from './Rate.module.css'

const Rate = () => {

    return (
        <div className={classes.containerRate}>
            <div className={classes.currentRateBlock}>Date:<br/>Rate:</div>
            <div className={classes.givenCurrencyBlock}>
                <select className={classes.selectGivenCurrency}></select>
                <input className={classes.inputGiven}></input>
            </div>
            <div className={classes.returnedCurrencyBlock}>
                <select className={classes.selectReturnedCurrency}></select>
                <input className={classes.inputReturned}></input>
            </div>
            <button className={classes.buttonConvert}>CONVERT</button>
        </div>
    )
}


export default Rate
