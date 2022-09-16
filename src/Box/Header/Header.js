import React from 'react'
import CurrentRateComponent from './CurrentRateComponent/CurrentRateComponent'
import classes from './Header.module.css'

const Header = ({date, rateUSD, rateEUR}) => {

    return (
        <div>
            <CurrentRateComponent currency={'USD'} date={date} className={classes.boxUSD} rate={rateUSD}/>
            <CurrentRateComponent currency={'EUR'} date={date} className={classes.boxEUR} rate={rateEUR}/>
        </div>
    )
}

export default Header
