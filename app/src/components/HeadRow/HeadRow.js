import React from 'react'

import {Button, Typography} from '@material-ui/core'

import { KeyboardArrowDown, SettingsOutlined } from '@material-ui/icons';

export default function HeadRow() {
    return <div className="head-row">
        <Typography variant='h1'>Сводка трудовых ресурсов</Typography>
        <div className="head-row_btns">
            <Button variant="outlined">
                За год&nbsp;<KeyboardArrowDown />
            </Button>
            <Button variant="outlined">
                <SettingsOutlined />&nbsp;Настройки
            </Button>
        </div>
    </div>
}