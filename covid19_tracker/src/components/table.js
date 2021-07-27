import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    root: {
        position: 'absolute'
    },
    
    headerCell : {color:'#3f51b5'
    ,textTransform:'uppercase',
    border: '6px solid grey'
  },
  header:{
    border: '6px solid grey',
    
  }
})

export default function CountryTable({ global_Data }) {
    global_Data.map((val) => (
        delete val.ID,
        delete val.Slug,
        delete val.Date,
        delete val.Premium,
        delete val.CountryCode
    ))


        
    

    // console.log(Country_Key);
    const classes = useStyles();
    

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead  className={classes.header}>
                    <TableRow >
                        {Object.keys(global_Data[0]).map((key, ind) => {
                            // console.log(key)
                            return (
                                <TableCell className= {classes.headerCell}>    {key}</TableCell>

                            )
                        })}

                    </TableRow>
                </TableHead>
                <TableBody>
                   

                    {global_Data.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope='row'>
                                {row.Country}

                            </TableCell>
                            <TableCell align="right">{row.NewConfirmed}</TableCell>
                            <TableCell align="right">{row.TotalConfirmed}</TableCell>
                            <TableCell align="right">{row.NewDeaths}</TableCell>
                            <TableCell align="right">{row.TotalDeaths}</TableCell>
                            <TableCell align="right">{row.NewRecovered}</TableCell>
                            <TableCell align="right">{row.TotalRecovered}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
