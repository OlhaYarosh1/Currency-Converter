import React, {useState} from 'react'
import classes from './Rate.module.css'

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(data => data.json())
    .then((data) => {
        display(data)
    })

    let selectFrom = document.getElementById('selectFrom')
    let selectTo = document.getElementById('selectTo')

    let json = null;
    let rates = null;
function display(data) {
    json = data;

    rates = json.filter((item) => {
        if (item.cc === 'USD' || item.cc === 'EUR' || item.cc === 'GBP') {
            return true;
        }
        return false;
    });

    console.log(rates)
    selectFrom = document.getElementById('selectFrom').innerHTML += `<option value='UAH'>UAH</option>`;
    selectTo = document.getElementById('selectTo').innerHTML += `<option value='UAH'>UAH</option>`;
    selectFrom = document.getElementById('selectFrom').innerHTML += `<option value='${data[25]['cc']}'>${data[25]['cc']}</option>`;
    selectTo = document.getElementById('selectTo').innerHTML += `<option value='${data[25]['cc']}'>${data[25]['cc']}</option>`;
    selectFrom = document.getElementById('selectFrom').innerHTML += `<option value='${data[24]['cc']}'>${data[24]['cc']}</option>`;
    selectTo = document.getElementById('selectTo').innerHTML += `<option value='${data[24]['cc']}'>${data[24]['cc']}</option>`;
    selectFrom = document.getElementById('selectFrom').innerHTML += `<option value='${data[32]['cc']}'>${data[32]['cc']}</option>`;
    selectTo = document.getElementById('selectTo').innerHTML += `<option value='${data[32]['cc']}'>${data[32]['cc']}</option>`;
}

const Rate = () => {

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    let rate = null;
    if (rates) {
        rate = rates[1].rate;
    }

    const handleFromChange = (value) => {
        setFrom(value);
        setTo((value * rate).toFixed(2));
        
    }

    const handleToChange = (value) => {
        setTo(value);
        setFrom((value * rate).toFixed(2));
    }

    return (
        <div className={classes.containerRate}>
            <div className={classes.fromCurrencyBlock}>
                <input id='inputFrom' placeholder='0' type='number' className={classes.inputFrom}
                    value={from}
                    onChange={(e) => handleFromChange(e.target.value)}
                ></input>
                <select id='selectFrom' className={classes.selectFrom}></select>
            </div>
            <div className={classes.toCurrencyBlock}>
                <input id='inputTo' placeholder='0' type='number' className={classes.inputTo}
                    value={to}
                    onChange={(e) => handleToChange(e.target.value)}
                ></input>
                <select id='selectTo' className={classes.selectTo}></select>
            </div>
            <div className={classes.equals}>=</div>
        </div>
    )
}

export default Rate
