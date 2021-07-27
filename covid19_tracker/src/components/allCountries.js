import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountryTable from './table';


const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 1100,
        marginTop: 20,
        marginLeft : 20,
        border: '3px solid grey',
        borderTop: '0.2',
        
        
        


    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5'
        ,textTransform: 'uppercase'
    }
}));

export default function AllCountries({ currentScreen }) {


    const [global_Data, set_Global_Data] = useState([{}]);

    useEffect(() => {
        async function get_data() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            set_Global_Data(data.Countries);

        }
        get_data()
    }, [])


    const classes = useStyles();

    return (

            <div className={classes.root}>
            <CountryTable global_Data={global_Data} />
            </div>
            
            
       
    );
}

