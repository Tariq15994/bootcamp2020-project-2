import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    position :'sticky',
    bottom : 0,
    
    
    
  },
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();
  console.log(screenConfig)
  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global States" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country States" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graph " icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
