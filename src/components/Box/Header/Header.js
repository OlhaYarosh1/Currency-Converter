import React from 'react'
import { useSelector } from 'react-redux'
import CurrentRateComponent from './CurrentRateComponent/CurrentRateComponent'
import classes from './Header.module.css'

const Header = ({date}) => {
    const rateUsd = useSelector(state => state.rates.rateUsd);
    const rateEur = useSelector(state => state.rates.rateEur);
    return (
        <div>
            <CurrentRateComponent currency={'USD'} date={date} className={classes.boxUSD} rate={rateUsd}/>
            <CurrentRateComponent currency={'EUR'} date={date} className={classes.boxEUR} rate={rateEur}/>
        </div>
    )
}

export default Header
