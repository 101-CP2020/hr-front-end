import { Button, createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import React from 'react';

const breakpoints = createBreakpoints({
    values: {
        bp_320: 0,
        bp_414: 414,
        bp_768: 768,
        bp_1024: 1024,
        bp_1280: 1280,
        bp_1366: 1366,
        bp_1600: 1600,
        bp_1900: 1900,
    },
});

const palette = {
    primary: { main: '#000', light: '#ddd' },
    secondary: { main: '#EE7233', light: '#4FC883' },
    info: { main: '#FEE9D9' },
    error: { main: '#EE3333' },
};

export const theme = createMuiTheme({
    palette,
    typography: {
        fontFamily: 'Roboto',
        h6: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '500'
        }
    },
    overrides: {
        MuiContainer: {
            root: {
                padding: '0 24px',
                overflowX: 'hidden',
                '@global': {
                    '*': {
                        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
                    },
                },
            },
            maxWidthLg: {
                maxWidth: '1440px!important',
            }
        },

        MuiLink: {},

        MuiButton: {},
    },
});
