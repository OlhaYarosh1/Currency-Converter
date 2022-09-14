import React from 'react'
import classes from './Rate.module.css'

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(data => data.json())
    .then((data) => {
        display(data)
    })

    let selectFrom = document.getElementById('selectFrom')
    let selectTo = document.getElementById('selectTo')

function display(data) {

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

    return (
        <div className={classes.containerRate}>
            <div className={classes.fromCurrencyBlock}>
                <input id='inputFrom' placeholder='0' type='number' className={classes.inputFrom}></input>
                <select id='selectFrom' className={classes.selectFrom}></select>
            </div>
            <div className={classes.toCurrencyBlock}>
                <input id='inputTo' placeholder='0' type='number' className={classes.inputTo}></input>
                <select id='selectTo' className={classes.selectTo}></select>
            </div>
            <div className={classes.equals}>=</div>
        </div>
    )
}

export default Rate
