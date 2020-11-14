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
        },
        subtitle1: {
            fontSize: '14px',
            fontWeight: '700',
            color: '#4f4f4f'
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
                '@media (min-width: 1484px)': {
                    maxWidth: '1440px',
                }
            }
        },
        MuiGrid: {
            container: {
                alignItems: 'flex-start'
            }
        },
        MuiLink: {},

        MuiButton: {
            'outlined': {
                borderColor: 'rgba(0,0,0,.2)',
                borderRadius: '4px',
                padding: '6px 16px',
                color: '#0470DC',
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: '500'
            }
        },

        MuiPaper: {
            'elevation1': {
                borderRadius: '4px',
                boxShadow: 'none'
            }
        },
        MuiTableCell: {
            head: {
                backgroundColor: '#F3F6F9',
                color: '#808182',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '500',
                padding: '8px',
                '& > span': {
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '400',
                },
                border: 'none',
            },
            body: {
                padding: '12px',
                border: 'none',
                fontSize: '16px',
                lineHeight: '24px',
                '& > span': {
                    display: 'block',
                    fontSize: '12px',
                },
                '& > svg': {
                    marginRight: '16px',
                    verticalAlign: 'middle'
                },
                borderBottom: '1px solid #f2f2f2'
            }
        }
    },
});
