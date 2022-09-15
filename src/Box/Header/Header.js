import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    
    return (
        <div>
            <div className={classes.rateUSD}>
                <div className={classes.usdBox}>
                    <div className={classes.stringUSD}>
                        1 USD is equivalent to 
                    </div>
                    <div className={classes.currentRateUSD}>
                        Rate
                    </div>
                    <div className={classes.currentDate}>
                        Dt.Mn.Year
                    </div>
                    <div className={classes.rateUAH}>
                        UAH
                    </div>
                </div>
            </div>
            <div className={classes.rateEUR}>
                <div className={classes.eurBox}>
                    <div className={classes.stringEUR}>
                        1 EUR is equivalent to 
                    </div>
                    <div className={classes.currentRateEUR}>
                        Rate
                    </div>
                    <div className={classes.currentDate}>
                        Dt.Mn.Year
                    </div>
                    <div className={classes.rateUAH}>
                        UAH
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
