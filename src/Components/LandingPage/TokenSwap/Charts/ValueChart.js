import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: [' ', ' ', ' ',
           ' ', ' '],
  datasets: [
    {
      label: 'stake',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 40, 110 , 160]
    }
  ]
}




const ValueChart = () => {
    return (
        <div>
             <div>
        <Line
          data={state}
        />
      </div>

        </div>
    )
}

export default ValueChart
