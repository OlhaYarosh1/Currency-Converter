import React, { useEffect, useState } from 'react'
import classes from './Rate.module.css'

const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

const Rate = () => {

    const select = document.querySelectorAll('.currency');
        fetch(BASE_URL)
            .then(data => data.json())
            .then((data) => {
                display(data);
            });

        function display(data) {
            for(var i = 0; i < data.length; i++) {
                console.log(data[i]['cc']);
                select.innerHTML += `<option value='${data[i]['cc']}'>${data[i]['cc']}</option>`;
            }
        }

    return (
        <div className={classes.containerRate}>
            <div className={classes.fromCurrencyBlock}>
                    <select name='currency' className={classes.currency}>
                        <option value=''></option>
                    </select>
                <input type='number' className={classes.inputFrom}></input>
            </div>
            <div className={classes.toCurrencyBlock}>
                    <select name='currency' className={classes.currency}>
                        <option value=''></option>
                    </select>
                <input type='number' className={classes.inputTo}></input>
            </div>
            <div className={classes.equals}>=</div>
            <button className={classes.arrows}></button>
            <button className={classes.buttonConvert}>CONVERT</button>
        </div>
    )
}


export default Rate
