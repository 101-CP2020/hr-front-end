import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
    body: {
        backgroundColor: '#f3f6f966',
        color: '#808182',
    },
}))(TableCell);

const NoBorderTableCell = withStyles((theme) => ({
    head: {
        maxWidth: '16px',
        overflow: 'visible'
    },
    body: {
        border: 'none',
        width: '40px',
        padding: 0,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        width: '100%'
    },
});

export default function CustomizedTable({rows}) {
    const classes = useStyles();
    const [open, setOpen] = useState([]);
console.log(rows);
    const toggleOpen = (id) => {
        return () => {
            if (open.indexOf(id) === -1) {
                setOpen([...open, id]);
            } else {
                setOpen(open.filter(item => item !== id));
            }
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="table">
                <TableHead>
                    <TableRow>
                        <NoBorderTableCell>Название</NoBorderTableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">Сейчас<span>на {(new Date()).toLocaleDateString('ru-RU')}</span></TableCell>
                        <TableCell align="right">3 мес<span>план</span></TableCell>
                        <TableCell align="right">6 мес<span>план</span></TableCell>
                        <TableCell align="right">1 год<span>план</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((rowArr) => {
                        let isOpened = rowArr.length > 0 && open.indexOf(rowArr[0].okpdtr) !== -1;
                        return rowArr.map((row, key) => key > 0 && !isOpened ? null : <TableRow key={key === 0 ? row.okpdtr : row.okpdtr + row.okved} onClick={key === 0 ? toggleOpen(row.okpdtr) : () => {}}>
                            <NoBorderTableCell component="th" scope="row">
                                {key === 0 ? (isOpened ? <KeyboardArrowDown/> : <KeyboardArrowRight/>) : null}
                            </NoBorderTableCell>
                            <TableCell style={{width: '390px'}} component="th" scope="row">
                                {key > 0 ? <KeyboardArrowRight/> : null}
                                <b>{row.title}</b>
                            </TableCell>
                            <TableCell align="right"><b>{row.counts}</b><span/></TableCell>
                            <StyledTableCell align="right">
                                {row.month_3_value || '-'}
                                {row.month_3_value ? <span>{((row.month_3_value - row.counts) > 0 ? '+' : '')+(row.month_3_value - row.counts)}</span> : <span/>}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.month_6_value || '-'}
                                {row.month_6_value ? <span>{((row.month_6_value - row.counts > 0) ? '+' : '')+(row.month_6_value - row.counts)}</span> : <span/>}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.month_12_value || '-'}
                                {row.month_12_value ? <span>{((row.month_12_value - row.counts > 0) ? '+' : '')+(row.month_12_value - row.counts)}</span> : <span/>}
                            </StyledTableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
