import React from 'react'
import classes from './Box.module.css'
import Header from './Header/Header'
import Rate from './Rate/Rate'
import useFetchRates from '../../hooks/use-fetch-rates'

const Box = () => {

    const [rates, rateUSD, rateEUR, exchangeDate] = useFetchRates();

    return (
        <div className={classes.box}>
            <Header date={exchangeDate} rateUSD={rateUSD} rateEUR={rateEUR}/>
            <Rate rates={rates}/>
        </div>
    )
}

export default Box
