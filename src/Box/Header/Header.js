import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.title}>Currency Converter</div>
    </div>
  )
}

export default Header
