import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';



function PieChart(){
    const [global_Data, set_Global_Data]= useState([{}])
    const [pieData , setPieData ] = useState({})
    

    useEffect(()=>{
        async function get_data() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            delete data.Global.Date;
            set_Global_Data(data.Global);
            console.log(global_Data)


            const dataSet = {
                labels: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [ global_Data.TotalConfirmed, 
                        global_Data.TotalDeaths,global_Data.TotalRecovered],
                    backgroundColor: [
                        'rgba(255, 206, 86)',
                      'rgba(200, 0, 0)',
                      'rgba(0, 200, 132)',
                    //   'rgba(75, 192, 192, 0.2)',
                    //   'rgba(153, 102, 255, 0.2)',
                    //   'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                      'rgba(255, 0, 0, 1)',
                      'rgba(0, 255, 0, 1)',
                    //   'rgba(75, 192, 192, 1)',
                    //   'rgba(153, 102, 255, 1)',
                    //   'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              };
              setPieData(dataSet);

        }
        get_data();
      
    },[]);


  
  return (
  <div className='header'>
      <h2>Covid19 Worldwide Graphical Data</h2>
    
    
  <Pie data={pieData} height={500} width={500} className='pieChart'/>
  </div>)
    
  
};

export default PieChart;