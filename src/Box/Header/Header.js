import React from 'react'
import classes from './Header.module.css'
import {FaMoneyBillAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.title}>
      <FaMoneyBillAlt className={classes.iconMoney}/>
      Currency Converter</div>
    </div>
  )
}

export default Header
