import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    
    return (
        <div>
            <div className={classes.rateUSD}>
                <div className={classes.usdBox}></div>
            </div>
            <div className={classes.rateEUR}>
                <div className={classes.eurBox}></div>
            </div>
        </div>
    )
}

export default Header
