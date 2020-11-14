import React from 'react'

import header from './header.png'
import statystic from './statystic.png'
import graf1 from './graf1.png'
import graf2 from './graf2.png'

export default function Prototype({type}) {
    const images = {
        header,
        statystic,
        graf1,
        graf2
    };
    return <img style={{marginBottom: '24px'}} width='100%' src={images[type]}/>
}