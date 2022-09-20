import {useState, useEffect} from 'react'

const useFetchRates = () => {

    const [rates, setRates] = useState();
    const [rateUSD, setRateUSD] = useState('');
    const [rateEUR, setRateEUR] = useState('');
    const [exchangeDate, setExchangeDate] = useState('');

    useEffect(() => {

        const filterRates = (json) => {
            return json.filter((item) => {
                if (item.cc === 'USD' || item.cc === 'EUR' || item.cc === 'GBP') {
                    return true;
                }
                return false;
            });
        }

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
    }, []);
        
        return [rates, rateUSD, rateEUR, exchangeDate];
}

export default useFetchRates
