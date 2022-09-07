import React from 'react'
import classes from './Box.module.css'
import Header from './Header/Header'
import Rate from '../Rate/Rate'

const Box = () => {

    return (
        <div className={classes.box}>
            <Header/>
            <Rate/>
        </div>
    )
}

export default Box
