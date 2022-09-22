import React from 'react'
import classes from './Box.module.css'
import Header from './Header/Header'
import Rate from './Rate/Rate'
import useFetchRates from '../../hooks/use-fetch-rates'
import { batch, useDispatch } from 'react-redux'
import { rateActions } from '../../store/rates-slice'

const Box = () => {
    const dispatch = useDispatch();

    const [rates, rateUSD, rateEUR, exchangeDate] = useFetchRates();
    batch(() => {
        dispatch(rateActions.setUsdRate(rateUSD));
        dispatch(rateActions.setEurRate(rateEUR));
    })
    return (
        <div className={classes.box}>
            <Header date={exchangeDate} rateUSD={rateUSD} rateEUR={rateEUR} />
            <Rate rates={rates} />
        </div>
    )
}

export default Box
