import React from 'react'
import classes from './CurrentRateComponent.module.css'

const CurrentRateComponent = ({currency, date, rate, className}) => {

    const fullClassName = ' ' + className;

    return (
        <div className={fullClassName}>
            <div className={classes.rate}>
                <div className={classes.box}>
                    <div className={classes.string}>
                        1 {currency} is equivalent to
                    </div>
                    <div className={classes.currentRate}>
                        {rate}
                    </div>
                    <div className={classes.currentDate}>
                        {date}
                    </div>
                    <div className={classes.rateUAH}>
                        UAH
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentRateComponent
