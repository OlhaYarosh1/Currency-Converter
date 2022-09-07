import React from 'react'
import classes from './Rate.module.css'

const Rate = () => {

    return (
        <div className={classes.containerRate}>
            <div className={classes.fromCurrencyBlock}>
                <div><select className={classes.selectFromCurrency}></select></div>
                <input type='number' className={classes.inputFrom}></input>
            </div>
            <div className={classes.toCurrencyBlock}>
                <div><select className={classes.selectToCurrency}></select></div>
                <input type='number' className={classes.inputTo}></input>
            </div>
            <button className={classes.arrows}></button>
            <button className={classes.buttonConvert}>CONVERT</button>
        </div>
    )
}


export default Rate
