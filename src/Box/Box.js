import React, { useState, useEffect } from 'react'
import classes from './Box.module.css'
import Header from './Header/Header'
import Rate from './Rate/Rate'

const Box = () => {

    const [rates, setRates] = useState();
    let [exchangeDate, setExchangeDate] = useState('');
    let [rateUSD, setRateUSD] = useState('');
    let [rateEUR, setRateEUR] = useState('');


    const filterRates = (json) => {
        return json.filter((item) => {
            if (item.cc === 'USD' || item.cc === 'EUR' || item.cc === 'GBP') {
                return true;
            }
            return false;
        });
    }

    useEffect(() => {
        if (!rates) {
            fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
                .then(data => data.json())
                .then((data) => {
                    let rates = [{cc: 'UAH', rate: 1.0}]
                    rates = rates.concat(filterRates(data));
                    const eurRate = rates.find((item) => item.cc === 'EUR')
                    setExchangeDate(eurRate.exchangedate);
                    let rateEUR = rates.find((item) => item.cc === 'EUR')
                    setRateEUR(rateEUR.rate.toFixed(2));
                    let rateUSD = rates.find((item) => item.cc === 'USD')
                    setRateUSD(rateUSD.rate.toFixed(2));
                    setRates(rates);
                });
        }
    });

    return (
        <div className={classes.box}>
            <Header date={exchangeDate} rateUSD={rateUSD} rateEUR={rateEUR}/>
            <Rate rates={rates}/>
        </div>
    )
}

export default Box
