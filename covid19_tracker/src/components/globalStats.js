import React, { useEffect ,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    
    maxWidth : 1000,
    margin: '150px 0 210px 200px ',
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title : {color:'#3f51b5'
  ,textTransform:'uppercase'
}
}));

export default function GlobalStats({currentScreen}) {
    const [global_Data , set_Global_Data] =useState({})

    useEffect(()=>{
        async function get_data(){
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            
            delete data.Global.Date;
            set_Global_Data(data.Global);
            
        }
        get_data()
    },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>{

      Object.keys(global_Data).map((key,ind)=>{
                  console.log(currentScreen)
                  return(
                    <Grid item xs={12} sm={4} key={ind}>
                    <Paper className={classes.paper}
                      elevation={3}>
                          <h3 className= {classes.title}> {key} </h3>
                          <h3> {global_Data[key]} </h3>
                          </Paper>
                  </Grid>
                 
                      
                  );
              })
              }
       
        
        
      </Grid>
    </div>
  );
}
