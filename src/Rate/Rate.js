import React from 'react'
import classes from './Rate.module.css'

const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

const Rate = () => {

        fetch(BASE_URL)
            .then(data => data.json())
            .then((data) => {
                display(data);
            });

        function display(data) {
            for(var i = 0; i < data.length; i++) {
                const selectFrom = document.getElementById('selectFrom').innerHTML += `<option value='${data[i]['cc']}'>${data[i]['cc']}</option>`;
                const selectTo = document.getElementById('selectTo').innerHTML += `<option value='${data[i]['cc']}'>${data[i]['cc']}</option>`;
            }
        }

    return (
        <div className={classes.containerRate}>
            <div className={classes.fromCurrencyBlock}>
                <input type='number' className={classes.inputFrom}></input>
                <select id='selectFrom' className={classes.currency}></select>
            </div>
            <div className={classes.toCurrencyBlock}>
                <select id='selectTo' className={classes.currency}></select>
                <input type='number' className={classes.inputTo}></input>
            </div>
            <div className={classes.equals}>=</div>
            <button className={classes.arrows}></button>
            <button className={classes.buttonConvert}>CONVERT</button>
        </div>
    )
}


export default Rate
