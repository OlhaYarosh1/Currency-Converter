import React from 'react'
import classes from './Box.module.css'
import Header from './Header/Header'
import Rate from './Rate/Rate'
import useFetch from './useFetch/useFetch'

const Box = () => {

    const [rates, rateUSD, rateEUR, exchangeDate] = useFetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')

    return (
        <div className={classes.box}>
            <Header date={exchangeDate} rateUSD={rateUSD} rateEUR={rateEUR}/>
            <Rate rates={rates}/>
        </div>
    )
}

export default Box
