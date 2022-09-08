import React from 'react'
import classes from './Rate.module.css'

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(data => data.json())
    .then((data) => {
        display(data)
    })

function display(data) {
        const selectFromUAH = document.getElementById('selectFrom').innerHTML += `<option value='UAH'>UAH</option>`;
        const selectToUAH = document.getElementById('selectTo').innerHTML += `<option value='UAH'>UAH</option>`;
        const selectFromUSD = document.getElementById('selectFrom').innerHTML += `<option value='${data[25]['cc']}'>${data[25]['cc']}</option>`;
        const selectToUSD = document.getElementById('selectTo').innerHTML += `<option value='${data[25]['cc']}'>${data[25]['cc']}</option>`;
        const selectFromGBP = document.getElementById('selectFrom').innerHTML += `<option value='${data[24]['cc']}'>${data[24]['cc']}</option>`;
        const selectToGBP = document.getElementById('selectTo').innerHTML += `<option value='${data[24]['cc']}'>${data[24]['cc']}</option>`;
        const selectFromEUR = document.getElementById('selectFrom').innerHTML += `<option value='${data[32]['cc']}'>${data[32]['cc']}</option>`;
        const selectToEUR = document.getElementById('selectTo').innerHTML += `<option value='${data[32]['cc']}'>${data[32]['cc']}</option>`;

}  

const Rate = () => {

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
