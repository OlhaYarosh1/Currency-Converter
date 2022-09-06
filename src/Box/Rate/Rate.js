import React from 'react'
import classes from './Rate.module.css'

const Rate = () => {

    return (
        <div className={classes.containerRate}>
            <div className={classes.currentRateBlock}>Date:<br/>Rate:</div>
            <div className={classes.givenCurrencyBlock}>
                <div><select className={classes.selectGivenCurrency}></select></div>
                <input type='number' className={classes.inputGiven}></input>
            </div>
            <div className={classes.returnedCurrencyBlock}>
                <div><select className={classes.selectReturnedCurrency}></select></div>
                <input type='number' className={classes.inputReturned}></input>
            </div>
            <button className={classes.buttonConvert}>CONVERT</button>
        </div>
    )
}


export default Rate
