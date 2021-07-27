import React from 'react';
import GlobalStats from './globalStats';
import AllCountries from './allCountries';
import PieChart from './chart.js';




export default function PageSelector({currentScreen}) {
  if (currentScreen === 0)
      return <GlobalStats />
  else if (currentScreen === 1) 
       return <AllCountries />
  else if (currentScreen === 2) 
       return <PieChart />
  else return <GlobalStats />
  
  
}


