import React from 'react'
import './Header.css'
import {Container, Typography} from '@material-ui/core'
import logo from './logo.svg'

export default function Header({}) {
    return <div className="header">
        <Container className="header-container">
            <div className="header-logo">
                <img src={logo} />
                <Typography classes='h6'>Калининградская область</Typography>
            </div>
            <div className="header-menu"></div>
        </Container>
    </div>
}