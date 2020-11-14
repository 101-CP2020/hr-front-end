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

function createData(id, name, calories, fat, carbs, protein, items = []) {
    return { id, name, calories, fat, carbs, protein, items };
}

const rows = [
    createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0, [
        createData(2, 'Gingerbread', 356, 16.0, 49, 3.9),
        createData(3, 'Gingerbread', 356, 16.0, 49, 3.9),
        createData(4, 'Gingerbread', 356, 16.0, 49, 3.9),
    ]),
    createData(5, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData(6, 'Eclair', 262, 16.0, 24, 6.0, [
        createData(7, 'Cupcake', 305, 3.7, 67, 4.3),
        createData(8, 'Gingerbread', 356, 16.0, 49, 3.9),
    ]),
];

const useStyles = makeStyles({
    table: {
        width: '100%'
    },
});

export default function CustomizedTable({}) {
    const classes = useStyles();
    const [open, setOpen] = useState([]);

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
                    {rows.map((row) => (
                        <React.Fragment key={row.id}>
                        <TableRow onClick={row.items.length ? toggleOpen(row.id) : () => {}}>
                            <NoBorderTableCell component="th" scope="row">
                                {open.indexOf(row.id) !== -1 ? <KeyboardArrowDown/> : <KeyboardArrowRight/>}
                            </NoBorderTableCell>
                            <TableCell component="th" scope="row">
                                <b>{row.name}</b>
                            </TableCell>
                            <TableCell align="right"><b>{row.calories}</b></TableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                        </TableRow>
                        {open.indexOf(row.id) !== -1 ? row.items.map((row) => <TableRow key={row.id} onClick={toggleOpen(row.id)}>
                            <NoBorderTableCell component="th" scope="row"/>
                            <TableCell component="th" scope="row">
                                <KeyboardArrowRight/>
                                {row.name}
                            </TableCell>
                            <TableCell align="right"><b>{row.calories}</b></TableCell>
                            <StyledTableCell align="right">{row.fat}<span>+10</span></StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}<span>+10</span></StyledTableCell>
                            <StyledTableCell align="right">{row.protein}<span>+10</span></StyledTableCell>
                        </TableRow>) : null}
                    </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
