import React, {useState, useEffect} from 'react'
import classes from './Rate.module.css'

const Rate = () => {

    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [rates, setRates] = useState();
    const [fromCC, setFromCC] = useState('UAH');
    const [toCC, setToCC] = useState('UAH');

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
                    setRates(rates);
                });
        }
    });

    let ccs = [];
    if (rates) {
        ccs = ccs.concat(rates.map((rate) => rate.cc));
    }

    console.log(rates)

    const getRate = () => {
        const rateFrom = rates.filter((rate) => rate.cc === fromCC)[0].rate;
        const rateTo = rates.filter((rate) => rate.cc === toCC)[0].rate;
        console.log(rateFrom);
        console.log(rateTo);
        return rateFrom/rateTo;
    }

    const handleFromChange = (value) => {
        setFrom(value);
        const rate = getRate();
        setTo((value * rate).toFixed(2));
    }

    const handleToChange = (value) => {
        setTo(value);
        const rate = getRate();
        setFrom((value / rate).toFixed(2));
    }

    const getOptions = () => {
        return ccs.map((cc, index) => {
            return <option key={index}>{cc}</option>;
        });
    }

    const onFromCCChanged = (value) => {
        setFromCC(value);
        const rate = getRate();
        setTo((from * rate).toFixed(2));
    }

    const onToCCChanged = (value) => {
        setToCC(value);
        const rate = getRate();
        setFrom((value * rate).toFixed(2));
    }

    return (
        <div className={classes.containerRate}>
            <div className={classes.fromCurrencyBlock}>
                <input id='inputFrom' placeholder='0' type='number' className={classes.inputFrom}
                    value={from}
                    onChange={(e) => handleFromChange(e.target.value)}
                ></input>
                <select 
                    className={classes.selectFrom}
                    onChange={(e) => onFromCCChanged(e.target.value)}
                    value={fromCC}
                >
                    {getOptions()}
                </select>
            </div>
            <div className={classes.toCurrencyBlock}>
                <input id='inputTo' placeholder='0' type='number' className={classes.inputTo}
                    value={to}
                    onChange={(e) => handleToChange(e.target.value)}
                ></input>
                <select
                    className={classes.selectTo}
                    onChange={(e) => onToCCChanged(e.target.value)}
                    value={toCC}
                >
                    {getOptions()}
                </select>
            </div>
            <div className={classes.equals}>=</div>
        </div>
    )
}

export default Rate
